const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51PMOIOESrFhOapS1k6eh2wdemOCQFxhFZXEtJkIMCF7Cosxf9PiFqTMwP8ZuleEEo9tnORSVy3JNuZeIUn2EU7xg00djkweMe0');

router.post('/create-checkout-session', async (req, res) => {
  try {
    const { price, name } = req.body;

    // Ensure that price is a number and name is an array of strings
    if (Array.isArray(name) && name.every(n => typeof n === 'string') && typeof price === 'number') {
      // Join the product names into a single string separated by commas
      const productName = name.join(', ');

      const lineItem = {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Products',
            description: productName,
          },
          unit_amount: price * 100, // amount in cents
        },
        quantity: 1,
      };

      // Create a new Stripe Checkout Session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [lineItem],
        mode: 'payment',
        success_url: `http://localhost:3000/payment/success`,
        cancel_url: `http://localhost:3000/payment/cancel`,
      });

      res.json({ id: session.id });
    } else {
      // If the name is not an array of strings or price is not a number, return an error
      res.status(400).json({ error: 'Invalid product name or price' });
    }
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Error creating checkout session', message: error.message });
  }
});

module.exports = router;
