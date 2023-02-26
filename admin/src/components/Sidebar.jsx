import {
  MdAttachMoney,
  MdBarChart,
  MdChatBubble,
  MdDynamicFeed,
  MdLineStyle,
  MdMailOutline,
  MdPermIdentity,
  MdReport,
  MdStorefront,
  MdTimeline,
  MdTrendingUp,
  MdWorkOutline,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import './sidebar.scss';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                {/* <LineStyle className="sidebarIcon" /> */}
                <MdLineStyle />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              {/* <Timeline className="sidebarIcon" /> */}
              <MdTimeline />
              Analytics
            </li>
            <li className="sidebarListItem">
              {/* <TrendingUp className="sidebarIcon" /> */}
              <MdTrendingUp />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                {/* <PermIdentity className="sidebarIcon" /> */}
                <MdPermIdentity />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                {/* <Storefront className="sidebarIcon" /> */}
                <MdStorefront />
                Products
              </li>
            </Link>
            <li className="sidebarListItem">
              {/* <AttachMoney className="sidebarIcon" /> */}
              <MdAttachMoney />
              Transactions
            </li>
            <li className="sidebarListItem">
              {/* <BarChart className="sidebarIcon" /> */}
              <MdBarChart />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              {/* <MailOutline className="sidebarIcon" /> */}
              <MdMailOutline />
              Mail
            </li>
            <li className="sidebarListItem">
              {/* <DynamicFeed className="sidebarIcon" /> */}
              <MdDynamicFeed />
              Feedback
            </li>
            <li className="sidebarListItem">
              {/* <ChatBubbleOutline className="sidebarIcon" /> */}
              <MdChatBubble />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            z
            <li className="sidebarListItem">
              {/* <WorkOutline className="sidebarIcon" /> */}
              <MdWorkOutline />
              Manage
            </li>
            <li className="sidebarListItem">
              {/* <Timeline className="sidebarIcon" /> */}
              <MdTimeline />
              Analytics
            </li>
            <li className="sidebarListItem">
              {/* <Report className="sidebarIcon" /> */}
              <MdReport />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
