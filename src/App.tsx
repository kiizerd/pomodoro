import styled from "styled-components";
import { useEffect, useState } from "react";
import Selector from "./components/Selector";
import Controls from "./components/Controls";
import Timer from "./components/Timer";
import Stats from "./components/Stats";

const StyledApp = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

interface CompletedTimers {
  work: number;
  longBreak: number;
  shortBreak: number;
}

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
    if (timer === timerLength) {
      resetTimer();
      if (timerLength === 25 * 60) {
        const newCompletions = Object.assign(
          { work: completions.work + 1 },
          completions
        );
        setCompletions(newCompletions);
      }
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
      <Stats workCompleted={completions.work} />
    </StyledApp>
  );
};

export default App;
