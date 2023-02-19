import { useLocation } from 'react-router-dom';
import './announcement.scss';
const Announcement = () => {
  const location = useLocation();

  if (location.pathname.indexOf('/product/') >= 0) {
    return null;
  }

  return <div className="announcement">Announcement</div>;
};
export default Announcement;
