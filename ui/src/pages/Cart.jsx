import { IoMdAdd, IoMdRemove } from 'react-icons/io';

import './cart.scss';
const Cart = () => {
  return (
    <div className="cart">
      <div className="title">
        {' '}
        <h1>YOUR BAG</h1>{' '}
      </div>

      <div className="top">
        <div className="button">
          <button>CONTINUTE SHOPPING</button>
        </div>
        <div className="texts">
          <div className="text">Shopping Bag(2)</div>
          <div className="text">Your Wishlist (0)</div>
        </div>
        <div className="button">
          <button>CHECKOUT NOW</button>
        </div>
      </div>

      <div className="bottom">
        <div className="info">
          <div className="product">
            <img
              src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
              alt=""
            />
            <div className="detail">
              <span className="title">Product: JESSIE THUNDER SHOES</span>
              <span className="id">ID: 123456789</span>
              <div className="color"></div>
              <div className="size">Size: 37.5</div>
            </div>
            <div className="total">
              <div className="amount">
                <div className="add">
                  <IoMdAdd size={33} />
                </div>
                <span className="amount">2</span>
                <div className="remove">
                  <IoMdRemove size={33} />
                </div>
              </div>
              <div className="price">$ 30</div>
            </div>
          </div>

          <div className="product">
            <img
              src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
              alt=""
            />
            <div className="detail">
              <span className="title">Product: HAKURA T-SHIRT</span>
              <span className="id">ID: 123456789</span>
              <div className="color"></div>
              <div className="size">Size: 37.5</div>
            </div>
            <div className="total">
              <div className="amount">
                <div className="add">
                  <IoMdAdd size={33} />
                </div>
                <span className="amount">2</span>
                <div className="remove">
                  <IoMdRemove size={33} />
                </div>
              </div>
              <div className="price">$ 30</div>
            </div>
          </div>
        </div>
        <div className="summary">
          <div className="title">ORDER SUMMARY</div>
          <div className="items">
            <div className="item">
              <span>Subtotal</span>
              <span>$ 80</span>
            </div>
            <div className="item">
              <span>Estimated Shiping </span>
              <span>$ 5.9</span>
            </div>
            <div className="item">
              <span>Shipping Diecount</span>
              <span>$ 5.9</span>
            </div>
          </div>
          <div className="total">
            <span>Total</span>
            <span>$ 80</span>
          </div>
          <button>CHECKOUT NOW</button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
