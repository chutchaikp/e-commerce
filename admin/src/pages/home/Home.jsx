import { useEffect, useMemo, useState } from 'react';
import FeaturedInfo from '../../components/featuredinfo/FeaturedInfo.jsx';
import Chart from '../../components/chart/Chart.jsx';
import WidgetSm from '../../components/widgetsm/WidgetSm.jsx';
import WidgetLg from '../../components/widgetlg/WidgetLg.jsx';
import { userData } from '../../dummyData.js';

import './home.scss';
const Home = () => {
  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const _data = userData;
    setUserStats(_data);
  }, []);

  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Agu',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  );

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};
export default Home;
