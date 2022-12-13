import DropTarget from '../../common/components/DropTarget';
import Column from '../Column/Column';

export default function DropColumn({ name, list, updateFn, }) {
  return (
    <DropTarget updateOnDrop={updateFn}>
      <Column name={name} list={list} />
    </DropTarget>
  );
}
