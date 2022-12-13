import PropTypes from 'prop-types';
import BugCard from '../BugCard/BugCard';
import Drag from '../../common/components/Drag';
import DropTarget from '../../common/components/DropTarget';

Column.propTypes = {
  name: PropTypes.string.isRequired,
  list: PropTypes.array,
};

export default function Column({
  name,
  update,
  list = []
}) {

  return (
    <DropTarget updateOnDrop={update}>
      <div className='Column'>{name}
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
