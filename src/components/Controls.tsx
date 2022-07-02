import ButtonGroup from "./ButtonGroup";
import Button from "./Button";

interface ControlMethods {
  start: () => void;
  stop: () => void;
  reset: () => void;
}

type ControlsProps = {
  isActive: boolean;
  controlMethods: ControlMethods;
};

const Controls = ({ isActive, controlMethods }: ControlsProps) => {
  const { start, stop, reset } = controlMethods;
  const startBtn = <Button onClick={start}>Start</Button>;
  const stopBtn = (
    <Button
      onClick={stop}
      color="#FF5722"
      textColor="#FFF"
      borderColor="#D32F2F"
    >
      Stop
    </Button>
  );
  return (
    <ButtonGroup>
      {!isActive ? startBtn : stopBtn}
      <Button onClick={reset} color="#FFEB3B" borderColor="#FF5722">
        Reset
      </Button>
    </ButtonGroup>
  );
};

export default Controls;
