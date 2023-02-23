import { Link } from 'react-router-dom';
import './categoryItem.scss';
const CategoryItem = ({ item }) => {
  return (
    <div className="categoryItem">
      <Link to={`/products/${item.cat}`}>
        <img src={item.img} alt="" />
        <div className="info">
          <div className="title">{item.title}</div>
          <button>SHOP NOW</button>
        </div>
      </Link>
    </div>
  );
};
export default CategoryItem;
