const { Router } = require("express");
// require('dotenv').config({ path: './.env' })

let Stripe = require('stripe')// (process.env.STRIPE_KEY)

const router = Router()

router.post('/payment', (req, res) => {
	// https://github.com/stripe/stripe-dotnet/issues/214
	// const stripe = new Stripe(YOUR_SECRET_KEY);
	debugger;
	const skey = process.env.STRIPE_KEY
	const stripe = new Stripe(skey)
	debugger;
	try {
		stripe.charges.create({
			source: req.body.tokenId,
			amount: req.body.amount,
			currency: "usd",
		}, (stripeErr, stripeRes) => {
			if (stripeErr) {
				console.log(stripeErr)
				res.status(500).json(stripeErr)
			} else {
				console.log('OK')
				res.status(200).json(stripeRes)
			}
		})
		// res.status(200).json(req.body);
	} catch (error) {
		res.status(500).json(err)
	}
})

router.get('/', (req, res) => {
	res.send('GET request to the homepage')
})

module.exports = router;