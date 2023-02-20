import { Router } from 'express'
import { getProduct, getProducts } from '../controlers/product';

const router = Router();


router.get('/', getProducts);
router.get('/:id', getProduct)

// router.post('/', function (req, res) {

// })

export default router;
