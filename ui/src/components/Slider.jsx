import { useState } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

import Img1 from '../images/0.png';
import Img2 from '../images/2.png';
import Img3 from '../images/3.png';

import './slider.scss';
const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleClick = (direction) => {
    try {
      if (direction === 'left') {
        setIndex(index === 0 ? 2 : index - 1);
      } else {
        setIndex(index === 2 ? 0 : index + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // style={{ transform: `translateX(100vw)` }}

  return (
    <div className="slider">
      <div className="leftArrow">
        <BsArrowLeftCircle size={50} onClick={(e) => handleClick('left')} />
      </div>
      <div
        className="wrapper"
        style={{ transform: `translateX(${index * -100}vw)` }}
      >
        <div className="slidex">
          <div className="img">
            <img src={Img1} alt="" />
          </div>
          <div className="info">
            <div className="title">SUMMER A</div>
            <div className="desc">
              DONT' COMPROMISE ON STYLE GET FLAT 30% OFF FOR NEW ARRIVALS
            </div>
            <div className="btn">
              <button>SHOP NOW</button>
            </div>
          </div>
        </div>

        <div className="slidex">
          <div className="img">
            <img src={Img2} alt="" />
          </div>
          <div className="info">
            <div className="title">SUMMER B</div>
            <div className="desc">
              DONT' COMPROMISE ON STYLE GET FLAT 30% OFF FOR NEW ARRIVALS
            </div>
            <div className="btn">
              <button>SHOP NOW</button>
            </div>
          </div>
        </div>

        <div className="slidex">
          <div className="img">
            <img src={Img3} alt="" />
          </div>
          <div className="info">
            <div className="title">SUMMER C</div>
            <div className="desc">
              DONT' COMPROMISE ON STYLE GET FLAT 30% OFF FOR NEW ARRIVALS
            </div>
            <div className="btn">
              <button>SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
      <div className="rightArrow">
        <BsArrowRightCircle
          size={50}
          onClick={(e) => {
            handleClick('right');
          }}
        />
      </div>
    </div>
  );
};
export default Slider;
