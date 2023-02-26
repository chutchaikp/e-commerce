import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { MdPublish } from 'react-icons/md';

import { productData } from '../../dummyData';

import './product.scss';
const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split('/')[2];
  const [pStats, setPStats] = useState([]);

  const product = useSelector((state) => {
    const p = state.product.products.find(
      (product) => product.id === parseInt(productId)
    );
    return p;
  });

  debugger;

  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Agu',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  );

  return (
    <div className="product">
      <div className="titleContainer">
        <h1 className="title">Product</h1>

        <Link to="/newproduct">
          <button className="addBtn">Create</button>
        </Link>
      </div>
      <div className="top">
        <div className="topLeft">
          {/* <Chart data={pStats} dataKey="Sales" title="Sales Performance" /> */}
        </div>
        <div className="topRight">
          <div className="infoTop">
            <img src={product.img} alt="" className="productInfoImg" />
            <span className="productName">{product.name}</span>
          </div>
          <div className="infoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{product.id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">5123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">{product.stock}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <form className="form">
          <div className="formLeft">
            <label>
              Product Name
              <input type="text" placeholder={product.title} />
            </label>
            <label>
              Product Description
              <input type="text" placeholder={product.desc} />
            </label>
            <label>
              Price
              <input type="text" placeholder={product.price} />
            </label>
            <label>
              In Stock
              <select name="inStock" id="idStock">
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </label>
          </div>
          <div className="formRight">
            <div className="upload">
              <img src={product.img} alt="" className="uploadImg" />
              <label for="file">
                <MdPublish />
              </label>
              <input type="file" id="file" style={{ display: 'none' }} />
            </div>
            <div className="btn">
              <button className="productButton">Update</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Product;
