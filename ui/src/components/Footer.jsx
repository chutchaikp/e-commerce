import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineMail,
} from 'react-icons/ai';
import { FaInstagramSquare, FaPinterestSquare } from 'react-icons/fa';

import { GoLocation } from 'react-icons/go';
import { GiRotaryPhone } from 'react-icons/gi';
import {} from 'react-icons/ai';

import './footer.scss';
const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <div className="logo">DEV.</div>
        <div className="desc">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </div>
        <div className="socials">
          <div className="facebook">
            <AiFillFacebook size={40} />
          </div>
          <div className="twitter">
            <AiFillTwitterSquare size={40} />
          </div>
          <div className="instagram">
            <FaInstagramSquare size={40} />
          </div>
          <div className="pinterest">
            <FaPinterestSquare size={40} />
          </div>
        </div>
      </div>

      <div className="center">
        <div className="title">Useful Links</div>
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Man Fashion</li>
          <li>Woman Fashion</li>
          <li>Accessories</li>
          <li>My Account</li>
          <li>Order Tracking</li>
          <li>Wishlist</li>
          <li>Terms</li>
        </ul>
      </div>
      <div className="right">
        <div className="title">Contact</div>
        <div className="address">
          <div className="room">
            <GoLocation />
            622 Dixie Path , South Tobinchester 98336
          </div>
          <div className="phone">
            <GiRotaryPhone />
            +1 234 56 78
          </div>
          <div className="email">
            <AiOutlineMail />
            contact@me.dev
          </div>
          <div className="payment">
            <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
