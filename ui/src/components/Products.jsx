import Product from './Product.jsx';

// import { popularProducts } from '../data';
import './products.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    async function onLoad() {
      try {
        const res = await axios.get(
          cat
            ? 'http://localhost:5000/api/product?category=' + cat
            : 'http://localhost:5000/api/product'
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    onLoad();
    console.log('on cat changed');
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilterProducts((prev) => {
        const res = products.filter((p) => {
          return Object.entries(filters).every(([key, value]) => {
            return p[key].includes(value);
          });
        });
        return res;
      });
  }, [products, cat, filters]);

  useEffect(() => {
    try {
      if (sort === 'newest') {
        setFilterProducts((prev) => {
          return [...prev].sort((a, b) => a.createdAt - b.createdAt);
        });
      } else if (sort === 'asc') {
        setFilterProducts((prev) => {
          return [...prev].sort((a, b) => a.price - b.price);
        });
      } else if (sort === 'desc') {
        setFilterProducts((prev) => {
          return [...prev].sort((a, b) => b.price - a.price);
        });
      }
    } catch (error) {}
  }, [sort]);

  return (
    <div className="products">
      {!cat
        ? products.map((p) => <Product key={p._id} p={p} />)
        : filterProducts.map((p) => <Product key={p._id} p={p} />)}
      {/* {cat ? filterProducts.map((p) => <Product key={p._id} p={p} />) : <></>} */}
    </div>
  );
};
export default Products;

// products.slice(0, 8).map((p) => <Product key={p._id} p={p} />)
