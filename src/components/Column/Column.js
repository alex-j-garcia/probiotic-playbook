import { useState } from 'react';
import PropTypes from 'prop-types';
import BugCard from '../BugCard/BugCard';

Column.propTypes = {
  name: PropTypes.string.isRequired,
  list: PropTypes.array,
};

export default function Column({
  name,
  list = []
}) {
  const [isHovered, setIsHovered] = useState(false);

  function handleDragEnter() {
    console.log(`${name} is being dragged over`);
    setIsHovered(true);
  }

  function handleDragExit(e) {
    console.log(e);
    console.log(`${name} is no longer dragged over`)
    setIsHovered(false);
  }

  return (
    <div
      className='Column'
      onDragEnter={handleDragEnter}
      onDragExit={handleDragExit}
      style={{ background: isHovered ? 'grey' : ''}}
    >
      {name}
      <ul>
        {list.map((item, index) => {
          return <BugCard key={index} item={item} isDraggable={true} />
        })}
      </ul>
    </div>
  );
}
