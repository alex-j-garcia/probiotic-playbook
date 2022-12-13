import PropTypes from 'prop-types';
import BugCardList from '../BugCardList/BugCardList';

Column.propTypes = {
  name: PropTypes.string.isRequired,
  list: PropTypes.array,
};

export default function Column({ name, list = [], }) {
  return (
    <div>{name}
      <BugCardList list={list} />
    </div>
  );
}
