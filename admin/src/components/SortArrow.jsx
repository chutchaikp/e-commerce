import React from 'react';
import { IconContext } from 'react-icons';
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md';
import './sortArrow.scss';

const SortArrow = ({ column, sort }) => {
  return (
    <IconContext.Provider value={{ color: '#5555ff', size: '33px' }}>
      <div className="sortArrow">
        <div className="container">
          {column === sort?.by ? (
            <>
              {sort.direction === 'a' ? (
                // <AiOutlineDownSquare size={35} />
                <MdArrowDownward />
              ) : (
                // <AiOutlineUpSquare size={35} />
                <MdArrowUpward />
              )}
            </>
          ) : (
            <>
              <div className="forHover">
                {/* <AiOutlineDownSquare size={35} /> */}
                <MdArrowDownward />
              </div>
            </>
          )}
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default React.memo(SortArrow);
