import './categoryItem.scss';
const CategoryItem = ({ item }) => {
  return (
    <div className="categoryItem">
      <img src={item.img} alt="" />
      <div className="info">
        <div className="title">{item.title}</div>
        <button>SHOP NOW</button>
      </div>
    </div>
  );
};
export default CategoryItem;
