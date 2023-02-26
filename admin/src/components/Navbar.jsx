import { useSelector } from 'react-redux';
import { RiNotification3Line } from 'react-icons/ri';
import { GrLanguage, GrSettingsOption } from 'react-icons/gr';
import './navbar.scss';
import { MdLanguage, MdSettings } from 'react-icons/md';
const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="navbar">
      {/* <h1> Navbar </h1>
      <h2>{currentUser?.username}</h2> */}

      <div className="topbarWrapper">
        <div className="left">
          <span className="logo">admin</span>
        </div>
        <div className="right">
          <div className="topbarIconContainer">
            {/* <NotificationsNone /> */}
            <RiNotification3Line />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            {/* <Language /> */}
            {/* <GrLanguage /> */}
            <MdLanguage />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            {/* <Settings /> */}
            {/* <GrSettingsOption /> */}
            <MdSettings />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
