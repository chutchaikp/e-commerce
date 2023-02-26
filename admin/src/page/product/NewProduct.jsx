import { MdPublish } from 'react-icons/md';
import './newProduct.scss';
const NewProduct = () => {
  return (
    <div className="newProduct">
      <h1> NewProduct </h1>

      <form className="form">
        <div className="formTop">
          <div className="upload">
            <img src="" alt="" className="uploadImg" />
            <label for="file">
              <MdPublish />
            </label>
            <input type="file" id="file" style={{ display: 'none' }} />
          </div>
        </div>
        <div className="formBottom">
          <label>
            Product Name
            <input type="text" placeholder="title" />
          </label>
          <label>
            Product Description
            <input type="text" placeholder="desc" />
          </label>
          <label>
            Product Category
            <input type="text" placeholder="Category" />
          </label>
          <label>
            Price
            <input type="text" placeholder="price" />
          </label>
          <label>
            In Stock
            <select name="inStock" id="idStock">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </label>

          <div className="btn">
            <button className="productButton">Create</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default NewProduct;
