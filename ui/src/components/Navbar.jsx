import { FaBeer, FaCartPlus, FaMailBulk, FaSearch } from 'react-icons/fa';
import { CiMail, CiShoppingCart } from 'react-icons/ci';
import { BsCart3 } from 'react-icons/bs';

import './navbar.scss';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="language">
            <span> EN </span>
          </div>
          <div className="search">
            <input type="text" />
            <FaSearch size={25} color="#5555ff" />
          </div>
        </div>
        <div className="center">
          <h3>DEV</h3>
        </div>
        <div className="right">
          <div className="menus">
            <div className="menu">REGISTER</div>
            <div className="menu">SIGN IN</div>
            <div className="menu">
              <div className="mycart">
                <BsCart3 size={30} />
                <div className="counter">8</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
