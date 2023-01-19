import PropTypes from 'prop-types';
import DragCardList from '../DragCardList/DragCardList';
import './Column.css';

Column.propTypes = {
  name: PropTypes.string.isRequired,
  list: PropTypes.array,
};

export default function Column({ name, list = [], }) {
  return (
    <div className='Column'>
      <h4>{name}</h4>
      <DragCardList list={list} />
    </div>
  );
}
