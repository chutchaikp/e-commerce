import CategoryItem from './CategoryItem.jsx';

import { categories } from '../data.js';

import './categories.scss';
const Categories = () => {
  return (
    <div className="categories">
      {categories.map((item, idx) => (
        <CategoryItem key={idx} item={item} />
      ))}
    </div>
  );
};
export default Categories;
