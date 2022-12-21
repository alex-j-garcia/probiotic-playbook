import DropTarget from '../../common/components/DropTarget';
import Column from '../Column/Column';

export default function DropColumn({ name, list, handlers, }) {
  return (
    <DropTarget handlers={handlers}>
      <Column name={name} list={list} />
    </DropTarget>
  );
}
