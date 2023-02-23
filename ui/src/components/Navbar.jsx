import { FaBeer, FaCartPlus, FaMailBulk, FaSearch } from 'react-icons/fa';
import { CiMail, CiShoppingCart } from 'react-icons/ci';
import { BsCart3 } from 'react-icons/bs';

import './navbar.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // const { product, quantity } = useSelector((state) => state.cart);
  debugger;
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="language">
            <span> EN </span>
          </div>
          <div className="search">
            <input type="text" />
            <FaSearch size={20} />
          </div>
        </div>
        <div className="center">
          <Link to="/">
            <h3>DEV</h3>
          </Link>
        </div>
        <div className="right">
          <div className="menus">
            <div className="menu">REGISTER</div>
            <div className="menu">SIGN IN</div>
            <div className="menu">
              <Link to="/cart">
                <div className="mycart">
                  <BsCart3 size={30} />
                  <div className="counter">{cartItems.length}</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
