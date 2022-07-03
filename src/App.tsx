import styled from "styled-components";
import { useEffect, useState } from "react";
import Selector from "./components/Selector";
import Controls from "./components/Controls";
import Timer from "./components/Timer";
import Stats from "./components/Stats";

const StyledApp = styled.main`
  padding: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const App = () => {
  const [timer, setTimer] = useState(0);
  // Length of timer in minutes
  const [timerLength, setTimerLength] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [completions, setCompletions] = useState<CompletedTimers>({
    work: 0,
    longBreak: 0,
    shortBreak: 0,
  });

  const startTimer = () => setIsActive(true);
  const stopTimer = () => setIsActive(false);
  const resetTimer = () => {
    setIsActive(false);
    setTimer(0);
  };

  const changeTimerLength = (newLength: number) => {
    setTimerLength(newLength * 60);
    resetTimer();
  };

  const incrementCompletions = (timerLength: number) => {
    if (timerLength === 25 * 60) {
      setCompletions({ ...completions, work: completions.work + 1 });
    } else if (timerLength === 5 * 60) {
      // May be better way to alter state, this is the first to work well
      setCompletions({
        ...completions,
        shortBreak: completions.shortBreak + 1,
      });
    } else if (timerLength === 15 * 60) {
      setCompletions({ ...completions, longBreak: completions.longBreak + 1 });
    }
  };

  // Create an interval and tick it every second
  // If the timer state is active, increment the timer.
  useEffect(() => {
    let interval: any;
    if (isActive) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 10);
    } else if (!isActive && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);

  // Stop timer once it equals timeLength to prevent it going negative
  useEffect(() => {
    if (timer >= timerLength) {
      resetTimer();
      incrementCompletions(timerLength);
    }
  }, [timer]);

  const timerControls = {
    start: startTimer,
    stop: stopTimer,
    reset: resetTimer,
  };

  return (
    <StyledApp className="App">
      <Selector selectTimer={changeTimerLength} />
      <Timer time={timerLength - timer} length={timerLength} />
      <Controls isActive={isActive} controlMethods={timerControls} />
      <Stats completions={completions} />
    </StyledApp>
  );
};

export default App;
