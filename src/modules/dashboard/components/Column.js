import PropTypes from 'prop-types';
import BugCard from './BugCard';

Column.propTypes = {
  name: PropTypes.string.isRequired,
  list: PropTypes.array,
};

export default function Column({
  name,
  list = []
}) {
  return (
    <div className='Column'>{name}
      <ul>
        {list.map(({ item }, index) => <BugCard key={index} species={item} />)}
      </ul>
    </div>
  );
}
