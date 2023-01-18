import PropTypes from 'prop-types';
import Drag from "../../common/components/Drag";
import BugCard from "../BugCard/BugCard";

export default function DragCard({ children, item }) {
  return (
    <Drag dataItem={item}>
      <BugCard item={item}>{children}</BugCard>
    </Drag>
  );
}
