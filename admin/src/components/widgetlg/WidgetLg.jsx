import { useEffect, useState } from 'react';
import ReactTimeago from 'react-timeago';
import thStrings from 'react-timeago/lib/language-strings/th';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

import { orderRows } from '../../dummyData.js';
import './WidgetLg.scss';

const formatter = buildFormatter(thStrings);

const WidgetLg = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const _data = orderRows;
    setOrders(_data);
  }, []);

  return (
    <div className="widgetLg">
      <div className="widgetLgTitle">Latest transactions</div>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {orders.map((order) => (
          <tr className="widgetLgTr" key={order._id}>
            <td className="widgetLgUser">
              <span className="widgetLgName">{order.userId}</span>
            </td>
            <td className="widgetLgDate">
              {/* {order.date} */}
              <ReactTimeago date={order.date} formatter={formatter} />
            </td>
            <td className="widgetLgAmount">${order.amount}</td>
            <td className="widgetLgStatus">
              {/* <Button type={order.status} /> */}
              <button>{order.status}</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default WidgetLg;
