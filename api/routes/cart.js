const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyTokenV2');
const Cart = require('../models/Cart.js')
const router = require('express').Router();

router.post('/', verifyToken, async (req, res) => {
	try {
		const newCart = new Cart(req.body);
		const saved = await newCart.save();
		res.status(200).json(saved);

	} catch (error) {
		res.status(500).json(error)
	}
})

router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
	try {
		const { id } = req.params;
		const updated = await Cart.findByIdAndUpdate(id, {
			$set: req.body,
		},
			{ new: true })
		res.status(200).json(updated);
	} catch (error) {
		res.status(500).json(error);
	}
	const { id, name, description } = req.body;
	res.send(`Name ${id} ${name}, desc ${description}`);
});

router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
	const { id } = req.params;
	try {
		await Cart.findByIdAndDelete(id);
		res.status(200).send(`Delete record with id ${id}`);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.get('/find/:userId', verifyTokenAndAuthorization, async (req, res) => {
	try {
		const { userId } = req.params;
		const cart = await Cart.findOne({ userId });
		res.status(200).json(cart);
	} catch (error) {
		res.status(500).json(error);
	}
})

router.get('/', verifyTokenAndAdmin, async (req, res) => {
	try {
		const carts = await Cart.find();
		res.status(200).json(carts);
	} catch (error) {
		res.status(500).json(error);
	}
})

module.exports = router;