const { verifyTokenAndAdmin } = require('./verifyTokenV2');
const Product = require('../models/Product')
const router = require('express').Router();

// CREATE
router.post('/', verifyTokenAndAdmin, async (req, res) => {
	try {

		const newProduct = new Product(req.body);
		const saved = await newProduct.save();
		res.status(200).json(saved);
	} catch (error) {
		res.status(500).json(error);
	}
})

// update
router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
	try {
		const { id } = req.params;
		const updateProduct = await Product.findByIdAndUpdate(id, {
			$set: req.body,
		},
			{ new: true })
		res.status(200).json(updateProduct);
	} catch (error) {
		res.status(500).json(error);
	}
})

// delete
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
	const { id } = req.params;
	try {
		await Product.findByIdAndDelete(id);
		res.status(200).send(`Delete record with id ${id}`);
	} catch (error) {
		res.status(500).json(error);
	}
});

// get by id
router.get('/find/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findById(id);
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json(error);
	}
})

// get by ?
router.get('/', async (req, res) => {
	try {
		const qNew = req.query.new;
		const qCategory = req.query.category;

		let products;

		if (qNew) {
			products = await Product.find().sort({ createdAt: -1 }).limit(5);
		} else if (qCategory) {
			products = await Product.find({
				categories: {
					$in: [qCategory]
				}
			})
		} else {
			products = await Product.find();
		}

		res.status(200).json(products);
	} catch (error) {
		res.status(500).json(error);
	}
})

module.exports = router;