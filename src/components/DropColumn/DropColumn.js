import DropTarget from '../../common/components/DropTarget';
import Column from '../Column/Column';

export default function DropColumn({ name, list, handlers, dragSource }) {
  return (
    <DropTarget handlers={handlers} dragSource={dragSource}>
      <Column name={name} list={list} />
    </DropTarget>
  );
}
