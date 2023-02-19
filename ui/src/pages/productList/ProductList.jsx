import Products from '../../components/Products';
import './productList.scss';
const ProductList = () => {
  return (
    <div className="productList">
      <div className="filters">
        <div className="filter">
          <div className="label">Filter Products: </div>
          <select>
            <option>color</option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>

          <select>
            <option disabled selected>
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="filter">
          <div className="label">Sort Products:</div>
          <select>
            <option selected>Newest</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
        </div>
      </div>
      <Products />
    </div>
  );
};
export default ProductList;
