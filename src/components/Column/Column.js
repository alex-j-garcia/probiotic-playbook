import PropTypes from 'prop-types';
import BugCardList from '../BugCardList/BugCardList';
import './Column.css';

Column.propTypes = {
  name: PropTypes.string.isRequired,
  list: PropTypes.array,
};

export default function Column({ name, list = [], }) {
  return (
    <div className='Column'>{name}
      <BugCardList list={list} />
    </div>
  );
}
