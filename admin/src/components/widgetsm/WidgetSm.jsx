import { useEffect, useState } from 'react';
import { MdVisibility } from 'react-icons/md';
import { userRows } from '../../dummyData.js';
import './widgetSm.scss';
const WidgetSm = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const _data = userRows;
    setUsers(_data);
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={
                user.img ||
                'https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif'
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              {/* <Visibility className="widgetSmIcon" /> */}
              <MdVisibility />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default WidgetSm;
