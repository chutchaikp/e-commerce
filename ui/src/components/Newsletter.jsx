import { IoMdSend } from 'react-icons/io';
import './newsletter.scss';
const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="title">Newsletter</div>
      <div className="desc">Get imely updates from your favorite products</div>

      <div className="inputs">
        <input type="text" />
        <button>
          <IoMdSend size={35} />
        </button>
      </div>
    </div>
  );
};
export default Newsletter;
