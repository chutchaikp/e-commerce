import { useEffect, useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SortArrow from '../../components/SortArrow.jsx';
import { productRows } from '../../dummyData.js';
import {
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  getProductFailure,
  getProductStart,
  getProductSuccess,
} from '../../redux/productSlice.js';

import './products.scss';
const Products = () => {
  const { products, isFetching, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const nagigage = useNavigate();

  const [sort, setSort] = useState({ by: 'id', direction: 'a' }); // { by, direction }
  const [columns, setColumns] = useState([]);

  const [isCheckAll, setIsCheckAll] = useState(false);
  const [selectIds, setSelectIds] = useState('');

  useEffect(() => {
    dispatch(getProductStart());
    try {
      const _data = productRows;
      if (_data && _data.length > 0) {
        const res = _data.map((d) => {
          return { ...d, isCheck: false };
        });

        const hideCols = ['website', 'isCheck'];
        // const cols = Object.keys(res[0]);
        const cols = Object.keys(res[0]).map((c) => {
          if (hideCols.indexOf(c) >= 0) {
            return { name: c, isHide: true };
          } else {
            return { name: c, isHide: false };
          }
        });
        setColumns(cols);
        // setCustomData(res);
        dispatch(getProductSuccess(res));
      }
    } catch (error) {
      dispatch(getProductFailure(error.message));
    }
  }, []);

  useEffect(() => {
    const _res = products.filter((d) => d.isCheck);
    const _selectIds = _res.map((r) => r.id);
    setSelectIds(JSON.stringify(_selectIds));

    if (_res.length === products.length) {
      setIsCheckAll(true);
    } else {
      setIsCheckAll(false);
    }
  }, [products]); // products

  const onCheck = (u, isCheck) => {
    try {
      const _products = products.map((p) => {
        if (p.id === u.id) {
          return { ...p, isCheck };
        }
        return { ...p };
      });
      dispatch(getProductSuccess(_products));
    } catch (error) {
      debugger;
    }
  };

  const onCheckAll = () => {
    try {
      if (isCheckAll === true) {
        const _products = products.map((p) => {
          return { ...p, isCheck: false };
        });
        dispatch(getProductSuccess(_products));
        return;
      }
      const _products = products.map((p) => {
        return { ...p, isCheck: true };
      });
      dispatch(getProductSuccess(_products));
    } catch (error) {
      debugger;
    }
  };

  const handleSort = (by) => {
    try {
      let sortDirection = 'a';
      if (sort && sort.by === by) {
        sortDirection = sort.direction === 'a' ? 'd' : 'a';
      } else {
        sortDirection = 'a';
      }
      setSort({ by, direction: sortDirection });

      // Because the array is frozen in strict mode, you'll need to copy the array before sorting it:
      // array = array.slice().sort((a, b) => b.stats.speed - a.stats.speed)
      const sorted = products.slice().sort((a, b) => {
        if (sortDirection === 'a') {
          return b[by] > a[by] ? -1 : 1;
        } else {
          return a[by] > b[by] ? -1 : 1;
        }
      });

      dispatch(getProductSuccess(sorted));
    } catch (error) {
      debugger;
    }
  };

  const handleDelete = (u) => {
    try {
      dispatch(deleteProductStart());
      dispatch(deleteProductSuccess(u));
    } catch (error) {
      console.log(error);
      dispatch(deleteProductFailure(error.message));
    }
  };
  const handleEdit = (u) => {
    try {
      debugger;
      nagigage('/product/' + u.id);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(new Date().toISOString());

  return (
    <div className="products">
      <h1> Products </h1>
      <h1> {selectIds} </h1>

      <table>
        <thead>
          <tr>
            <td>
              <input
                checked={isCheckAll}
                type="checkbox"
                onChange={(e) => {
                  e.preventDefault();
                  onCheckAll();
                }}
              />
            </td>
            {columns.map((c) => {
              return (
                <td className={c.isHide ? 'hide' : 'title'} key={'c' + c.name}>
                  <div
                    className="titleColumn"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSort(c.name);
                    }}
                  >
                    <div className="wrapper">
                      <span className="columnName">{c.name}</span>
                      <span className={sort?.by === c.name ? '' : 'arrow'}>
                        <SortArrow column={c.name} sort={sort} />
                      </span>
                    </div>
                  </div>
                </td>
              );
            })}

            <td></td>
            <td></td>
          </tr>
        </thead>

        <tbody>
          {products.map((u, _idx) => {
            return (
              <tr key={_idx}>
                <td>
                  <input
                    type="checkbox"
                    checked={u.isCheck}
                    onChange={(e) => {
                      e.preventDefault();
                      onCheck(u, e.target.checked);
                    }}
                  />
                </td>
                {columns.map((c, idx) => {
                  const key = 'x' + c.name + idx;

                  if (c.name === 'img') {
                    return (
                      <td name={key} key={key}>
                        <img src={u[c.name]} alt="" />
                      </td>
                    );
                  }

                  return (
                    <td className={c.isHide ? 'hide' : ''} name={key} key={key}>
                      {u[c.name]}
                    </td>
                  );
                })}
                <td>
                  <button
                    className="btnEdit"
                    onClick={(e) => {
                      e.preventDefault();
                      handleEdit(u);
                    }}
                  >
                    <MdEdit />
                  </button>
                </td>
                <td>
                  <button
                    className="btnDelete"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete(u);
                    }}
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Products;
