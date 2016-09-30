const express = require('express');
const router = express.Router();
//Stripe API
const stripe = require('stripe')('sk_test_IPlo3PkKcg8lbQjGDWG2v2Dp');

router.route('/charge')
      .post((req, res) => {
        let token = req.body.stripeToken;

        let amount = 10000;
        stripe.charges.create({
        	card: stripeToken,
        	currency: 'usd',
        	amount: amount,
        },
        (err, charge) => {
        	if (err) {
        		res.status(401).send({error: err.type});
        	}
        	else {
        		res.status(204).send({charge});
        	}
        })
      })

module.exports = router;