import { useGlobalState } from '../../../common/hooks/useGlobalState';
import Header from '../../../common/components/Header';
import Button from '../../../common/components/Button';

export default function TriageHeader() {
  const [, { setModalContent, }] = useGlobalState();

  return (
    <Header>
      <Button handleClick={() => { setModalContent('bugCardList') }}>
        Add a 🐛
      </Button>
    </Header>
  );
}
