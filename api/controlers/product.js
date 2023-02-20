
// get products 
// get product

import Product from "../models/Product";

// create

// update
// delete

export const getProducts = async (req, res, next) => {
	res.send(req.params.bookId)
	try {
		const products = await Product.find({});
		res.status(200).json(products)
	} catch (error) {
		next(error)
	}
}

export const getProduct = async (req, res, next) => {
	try {
		const { id } = req.params;
		const product = await Product.findById(id);
		res.status(200).json(product)
	} catch (error) {
		next(error)
	}
}