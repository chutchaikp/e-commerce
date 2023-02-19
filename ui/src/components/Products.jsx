import Product from './Product.jsx';

import { popularProducts } from '../data';
import './products.scss';
const Products = () => {
  return (
    <div className="products">
      {popularProducts.map((p) => (
        <Product key={p.id} p={p} />
      ))}
    </div>
  );
};
export default Products;
