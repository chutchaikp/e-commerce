const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyTokenV2');
const Order = require('../models/Order.js')
const router = require('express').Router();

router.post('/', verifyToken, async (req, res) => {
	try {
		const newOrder = new Order(req.body);
		const saved = await newOrder.save();
		res.status(200).json(saved);

	} catch (error) {
		res.status(500).json(error)
	}
})

router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
	try {
		const { id } = req.params;
		const updated = await Order.findByIdAndUpdate(id, {
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

router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
	const { id } = req.params;
	try {
		await Order.findByIdAndDelete(id);
		res.status(200).send(`Delete record with id ${id}`);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.get('/find/:userId', verifyTokenAndAuthorization, async (req, res) => {
	try {
		const { userId } = req.params;
		const orders = await Order.find({ userId });
		res.status(200).json(orders);
	} catch (error) {
		res.status(500).json(error);
	}
})

router.get('/', verifyTokenAndAdmin, async (req, res) => {
	try {
		const orders = await Order.find();
		res.status(200).json(orders);
	} catch (error) {
		res.status(500).json(error);
	}
})

// GET MONTHLY INCOME

router.get('/income', verifyTokenAndAdmin, async (req, res) => {
	try {
		const date = new Date();
		const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
		const prevMonth = new Date(date.setMonth(date.getMonth() - 2))

		const income = await Order.aggregate([
			{ $match: { createdAt: { $gte: prevMonth } } },
			{
				$project: {
					month: { $month: "$createdAt" },
					sales: "$amount",
				},
			},
			{
				$group: {
					_id: "$month",
					total: { $sum: "$sales" },
				},
			},
		]);

		res.status(200).json(income)
	} catch (error) {
		res.status(500).json(error);
	}

})

module.exports = router;