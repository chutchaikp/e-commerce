import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Products from '../../components/Products';
import './productList.scss';
const ProductList = () => {
  const location = useLocation();
  const cat = String(location.pathname).split('/')[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');

  // console.log(cat);

  const handleFilters = (e) => {
    e.preventDefault();
    setFilters((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className="productList">
      <div className="title">
        <h2>
          {cat} {JSON.stringify(filters)}{' '}
        </h2>
      </div>
      <div className="filters">
        <div className="filter">
          <div className="label">Filter Products: </div>
          <select name="color" onChange={handleFilters}>
            <option disabled>color</option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>

          <select name="size" onChange={handleFilters}>
            <option disabled>Size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="filter">
          <div className="label">Sort Products:</div>
          <select name="sort" onChange={(e) => setSort(e.target.value)}>
            <option value={'newest'}>Newest</option>
            <option value={'asc'}>Price (asc)</option>
            <option value={'desc'}>Price (desc)</option>
          </select>
        </div>
      </div>
      <Products cat={cat} filters={filters} sort={sort} />
    </div>
  );
};
export default ProductList;
