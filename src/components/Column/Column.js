import { useState } from 'react';
import PropTypes from 'prop-types';
import DragCardList from '../DragCardList/DragCardList';
import './Column.css';

Column.propTypes = {
  name: PropTypes.string.isRequired,
  list: PropTypes.array,
};

export default function Column({ name, list = [], }) {
  const [isDragOver, setIsDragOver] = useState(false);
  const styles = {
    backgroundColor: isDragOver ? 'hsla(0, 8%, 95%, 0.6)' : ''
  };

  return (
    <div
      className='Column'
      onDragEnter={() => setIsDragOver(true)}
      onDragLeave={() => setIsDragOver(false)}
      style={styles}
    >{name}
      <DragCardList list={list} />
    </div>
  );
}
