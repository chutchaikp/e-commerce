// import Img1 from 'https://www.pngarts.com/files/17/Halloween-T-Shirt-PNG-HQ-Pic.png'
import {
  IoMdAdd,
  IoMdAddCircleOutline,
  IoMdRemove,
  IoMdRemoveCircleOutline,
} from 'react-icons/io';
import './productPage.scss';
const ProductPage = () => {
  return (
    <div className="productPage">
      {/* <div className="wrapper"> */}
      <div className="img">
        <img
          src="https://www.pngarts.com/files/17/Halloween-T-Shirt-PNG-HQ-Pic.png"
          alt=""
        />
      </div>
      <div className="info">
        <div className="title">Lorem, ipsum.</div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laborum
          odio earum fugiat quibusdam, non iste, placeat modi, ad nostrum
          dolores culpa beatae veniam eaque. Explicabo iure fugit dolore magnam?
        </div>
        <div className="price">$ 20</div>
        <div className="filters">
          <div className="filter">
            <div className="title">Color</div>
            <div className="black"></div>
            <div className="darkblue"></div>
            <div className="gray"></div>
          </div>
          <div className="filter">
            <div className="title">Size</div>
            <select name="" id="">
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
        </div>

        <div className="add">
          <div className="up">
            <IoMdRemove size={35} />
          </div>
          <span>1</span>
          <div className="down">
            <IoMdAdd size={35} />
          </div>

          <button>ADD TO CART</button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};
export default ProductPage;
