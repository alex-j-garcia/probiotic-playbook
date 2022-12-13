import { useState } from 'react';
import PropTypes from 'prop-types';
import BugCard from '../BugCard/BugCard';
import Drag from '../../common/components/Drag';
import DropTarget from '../../common/components/DropTarget';
import './Column.css';

Column.propTypes = {
  name: PropTypes.string.isRequired,
  list: PropTypes.array,
};

export default function Column({ name,update, list = [] }) {
  const [ isDragOver, setIsDragOver ] = useState(false);

  return (
    <DropTarget updateOnDrop={update}>
      <div
        className={`Column ${isDragOver ? 'hover' : ''}`}
        onDrop={() => setIsDragOver(false)}
        onDragOver={() => setIsDragOver(true)}
        onDragLeave={() => setIsDragOver(false)}
      >{name}
        <ul>
          {list.map((item, index) => {
            return (
              <Drag key={index} dataItem={item}>
                <BugCard item={item} />
              </Drag>
            )
          })}
        </ul>
      </div>
    </DropTarget>
  );
}
