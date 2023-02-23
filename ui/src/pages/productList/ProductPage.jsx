// import Img1 from 'https://www.pngarts.com/files/17/Halloween-T-Shirt-PNG-HQ-Pic.png'
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  IoMdAdd,
  IoMdAddCircleOutline,
  IoMdRemove,
  IoMdRemoveCircleOutline,
} from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addProduct } from '../../redux/cartRedux';
import { publicRequest } from '../../requestMethods';

import './productPage.scss';
const ProductPage = () => {
  const dispatch = useDispatch();
  // or useLocation ?
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('black');
  const [size, setSize] = useState('M');

  useEffect(() => {
    // http://localhost:5000/api/product/find/63f5429609087f06f64b9ce3
    async function onIdChanged() {
      try {
        // const url = 'http://localhost:5000/api/product/find/' + id;
        // const resx  = axios.get(url);
        const res = await publicRequest(`/product/find/${id}`);
        setProduct(res.data);
        debugger;
      } catch (error) {
        console.log(error);
      }
    }
    onIdChanged();
  }, [id]);

  const handleQuantity = (type) => {
    try {
      if (type === 'inc') {
        setQuantity(quantity + 1);
      } else {
        setQuantity(quantity - 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = () => {
    // dispatch(addProduct() )
    dispatch(
      // addProduct({ product, quantity, price: product.price * quantity })
      addProduct({
        product,

        color,
        size,
        quantity,
        total: product.price * quantity,
      })
    );
  };

  return (
    <div className="productPage">
      <div className="img">
        {/* <img
          src="https://www.pngarts.com/files/17/Halloween-T-Shirt-PNG-HQ-Pic.png"
          alt=""
        /> */}
        <img src={product.img} alt="" />
      </div>
      <div className="info">
        <div className="title">{product.title}</div>
        <div className="desc">{product.desc}</div>
        <div className="price">$ {product.price}</div>
        <div className="filters">
          <div className="filter">
            <div className="title">Color</div>
            <div className="black"></div>
            <div className="darkblue"></div>
            <div className="gray"></div>
          </div>
          <div className="filter">
            <div className="title">Size</div>
            <select onChange={(e) => setSize(e.target.value)}>
              {product.size?.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
              {/* <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option> */}
            </select>
          </div>
        </div>

        <div className="add">
          <div>
            <div className="up">
              <IoMdRemove size={35} onClick={() => handleQuantity('dec')} />
            </div>
            <span>{quantity}</span>
            <div className="down">
              <IoMdAdd size={35} onClick={() => handleQuantity('inc')} />
            </div>
          </div>

          <button onClick={addToCart}>ADD TO CART</button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};
export default ProductPage;
