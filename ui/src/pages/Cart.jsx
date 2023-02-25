import axios from 'axios';
import { useEffect, useState } from 'react';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import StripeCheckout from 'react-stripe-checkout';

import './cart.scss';
const Cart = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const [stripePublicKey, setStripePublicKey] = useState(
    process.env.REACT_APP_STRIPE
  );

  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    try {
      setStripeToken(token);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    debugger;
    async function makeRequest() {
      try {
        const res = await axios.post(
          'http://localhost:5000/api/checkout/payment',
          {
            tokenId: stripeToken.id,
            amount: sum,
          }
        );
        console.log(res);
        navigate('/success', { data: res });
      } catch (error) {
        console.log(error);
      }
    }
    stripeToken && sum > 1 && makeRequest();
  }, [stripeToken]);

  // summarize
  const totals = cartItems.map((c) => c.total);
  const sum = totals.reduce((a, b) => a + b);

  return (
    <div className="cart">
      <div className="title">
        <h1>YOUR BAG</h1>
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
          {cartItems.map((c, idx) => {
            return (
              <div key={idx} className="product">
                <img src={c.product?.img} alt="" />
                <div className="detail">
                  <span className="title">Product: {c.product?.title}</span>
                  <span className="id">ID: {c.product?._id}</span>
                  <div className="color"></div>
                  <div className="size">Size: {c.size}</div>
                </div>
                <div className="total">
                  <div className="amount">
                    <div className="add">
                      <IoMdAdd size={33} />
                    </div>
                    <span className="amount">{c.quantity}</span>
                    <div className="remove">
                      <IoMdRemove size={33} />
                    </div>
                  </div>
                  <div className="price">$ {c.total}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="summary">
          <div className="title">ORDER SUMMARY</div>
          {/* <span>{stripePublicKey}</span> */}
          <div className="items">
            <div className="item">
              <span>Subtotal</span>
              <span>$ {sum}</span>
            </div>
            <div className="item">
              <span>Estimated Shiping </span>
              <span>$ 5.9</span>
            </div>
            <div className="item">
              <span>Shipping Discount</span>
              <span>$ -5.9</span>
            </div>
          </div>
          <div className="total">
            <span>Total</span>
            <span>$ {sum}</span>
          </div>

          <StripeCheckout
            name="DEV"
            image="https://avatars.githubusercontent.com/u/2068733?s=400&u=e19ccdba63aa7c94653d463fda4e83dc93b68deb&v=4"
            billingAddress
            shippingAddress
            description={`Your total is ${sum}`}
            amount={sum}
            token={onToken}
            stripeKey={stripePublicKey}
            o
          >
            <button onClick={() => {}}>CHECKOUT NOW</button>
          </StripeCheckout>
        </div>
      </div>
    </div>
  );
};
export default Cart;
