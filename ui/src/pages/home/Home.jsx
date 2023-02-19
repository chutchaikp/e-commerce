import Slider from '../../components/Slider';
import Categories from '../../components/Categories.jsx';
import Products from '../../components/Products.jsx';
import Newsletter from '../../components/Newsletter.jsx';
import './home.scss';
const Home = () => {
  return (
    <div className="home">
      {/* ok */}
      <Slider />

      <Categories />

      <Products />

      <Newsletter />
    </div>
  );
};
export default Home;
