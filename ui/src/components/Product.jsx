import { MdOutlineFavoriteBorder, MdOutlineShoppingCart } from 'react-icons/md';
import { RiSearchEyeLine } from 'react-icons/ri';
import {} from 'react-icons/md';

import './product.scss';
const Product = ({ p }) => {
  return (
    <div className="product">
      {/* <div className="circle">x</div> */}
      <img src={p.img} alt="" />
      <div className="info">
        <div className="icons">
          <div className="icon">
            <MdOutlineShoppingCart size={35} />
          </div>
          <div className="icon">
            <RiSearchEyeLine size={35} />
          </div>
          <div className="icon">
            <MdOutlineFavoriteBorder size={35} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
