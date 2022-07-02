import Button from "./Button";
import ButtonGroup from "./ButtonGroup";

type SelectorProps = {
  selectTimer: (newLength: number) => void;
};

const Selector = ({ selectTimer }: SelectorProps) => {
  return (
    <ButtonGroup>
      <Button onClick={() => selectTimer(25)}>Work</Button>
      <Button onClick={() => selectTimer(5)}>Short</Button>
      <Button onClick={() => selectTimer(15)}>Long</Button>
    </ButtonGroup>
  );
};

export default Selector;
