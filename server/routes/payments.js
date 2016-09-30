const express = require('express');
const router = express.Router();
//Stripe API
const stripe = require('stripe')('sk_test_IPlo3PkKcg8lbQjGDWG2v2Dp');

router.route('/charge')
      .post((req, res) => {
        let {token, amount} = req.body;

        stripe.charges.create({
        	source: token,
        	currency: 'usd',
        	amount: amount,
            description: "Example charge",
        },
        (err, charge) => {
        	if (err) {
        		res.status(500).send({error: err.type});
        	}
        	else {
        		res.status(204).send({charge});
        	}
        })
      })

module.exports = router;