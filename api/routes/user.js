const User = require('../models/User');
const { verifyToken, verifyTokenAndAdmin, } = require('./verifyTokenV2.js')
const router = require('express').Router();

// router.get('/test2', (req, res) => {
// 	res.json([{ id: 1, name: 'a product' }]);
// })

// router.get('/test', verifyTokenAndAdmin, (req, res) => {
// 	res.json([{ id: 1, name: 'a product' }]);
// })

router.put("/:id", verifyToken, async (req, res) => {
	const { id, } = req.params;
	try {
		const updatedUser = await User.findByIdAndUpdate(
			id,
			{
				$set: req.body,
			},
			{ new: true, }
		)
		res.status(200).json(updatedUser);
	} catch (error) {
		res.status(500).json(error);
	}
})

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
	const { id, } = req.params;
	try {
		const deletedUser = await User.findByIdAndDelete({
			id,
		})
		res.status(200).json(deletedUser);
	} catch (error) {
		res.status(500).json(error);
	}
});

// GET USER
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
	const { id, } = req.params;
	try {
		const user = await User.findById(id);
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json(error);
	}
});

// GET ALL USER
router.get("/", verifyTokenAndAdmin, async (req, res) => {
	const query = req.query.new;
	try {
		const users = query ? await User.find().sort({ _id: -1 }).limit(1) : await User.find();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.get('/stats', verifyTokenAndAdmin, async (req, res) => {
	try {
		const date = new Date();
		const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
		const data = await User.aggregate([
			{ $match: { createdAt: { $gte: lastYear } } },
		]);

		res.status(200).json(data);
	} catch (error) {
		res.status(500).json(error);
	}
})

module.exports = router