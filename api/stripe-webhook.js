import crypto from 'crypto';

// Verify Stripe webhook signature without external dependencies
function verifyStripeSignature(payload, sigHeader, secret) {
  const parts = sigHeader.split(',').reduce((acc, part) => {
    const [key, value] = part.split('=');
    acc[key] = value;
    return acc;
  }, {});

  const timestamp = parts.t;
  const signature = parts.v1;

  if (!timestamp || !signature) return false;

  // Reject if timestamp is older than 5 minutes (replay attack protection)
  const tolerance = 300;
  const now = Math.floor(Date.now() / 1000);
  if (now - parseInt(timestamp) > tolerance) return false;

  const signedPayload = `${timestamp}.${payload}`;
  const expected = crypto
    .createHmac('sha256', secret)
    .update(signedPayload)
    .digest('hex');

  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
}

export const config = {
  api: { bodyParser: false }
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    console.error('STRIPE_WEBHOOK_SECRET not configured');
    return res.status(500).json({ error: 'Webhook not configured' });
  }

  // Read raw body
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  const rawBody = Buffer.concat(chunks).toString('utf8');

  // Verify signature
  const sigHeader = req.headers['stripe-signature'];
  if (!sigHeader) {
    return res.status(400).json({ error: 'Missing stripe-signature header' });
  }

  const isValid = verifyStripeSignature(rawBody, sigHeader, secret);
  if (!isValid) {
    return res.status(400).json({ error: 'Invalid signature' });
  }

  // Parse event
  let event;
  try {
    event = JSON.parse(rawBody);
  } catch {
    return res.status(400).json({ error: 'Invalid JSON' });
  }

  // Handle events
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object;
      console.log(`Payment completed: ${session.id} | ${session.customer_email} | ${session.amount_total / 100} ${session.currency}`);
      // TODO: When bot integration is ready, send Telegram message to user
      // granting premium access via session.customer_email or session.metadata
      break;
    }
    case 'customer.subscription.deleted': {
      const sub = event.data.object;
      console.log(`Subscription cancelled: ${sub.id} | ${sub.customer}`);
      // TODO: Revoke premium access
      break;
    }
    default:
      console.log(`Unhandled event: ${event.type}`);
  }

  res.status(200).json({ received: true });
}
