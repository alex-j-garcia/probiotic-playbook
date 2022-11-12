import { useModalContext } from "../../common/useModalContext";
import BugButton from "./BugButton";

export default function Header() {
  const { toggleIsVisible } = useModalContext();

  return (
    <header>
      <BugButton handleClick={toggleIsVisible} />
    </header>
  );
}
