import styled from "styled-components";

interface TimerProps {
  time: number;
  length: number;
}

interface TimerSectionProps {
  progress: number;
  angleMod: number;
}

const TimerSection = styled.section<TimerSectionProps>`
  color: #fff;
  margin: 10px;
  font-size: 34px;
  padding: 60px 40px;
  text-align: center;
  border-radius: 50%;
  background-color: #f44336;
  background: rgb(54, 244, 192);
  background: linear-gradient(
    ${(p) => p.angleMod + 12}deg,
    rgba(54, 244, 192, 1) ${(p) => 100 - p.progress - 63}%,
    rgba(56, 139, 44, 1) ${(p) => 100 - p.progress - 24}%,
    rgba(244, 67, 54, 1) ${(p) => 100 - p.progress + 7}%,
    rgba(244, 67, 54, 1) ${(p) => 100 - p.progress + 43}%,
    rgba(244, 215, 54, 1) ${(p) => 100 - p.progress + 150}%
  );
`;

const Timer = ({ time, length }: TimerProps) => {
  const seconds: number = time % 60;
  const secondsString = String(seconds > 9 ? seconds : "0" + seconds);
  const minutes = Math.floor(time / 60);
  const minutesString = String(minutes > 9 ? minutes : "0" + minutes);
  const timeString = minutesString + ":" + secondsString;
  const angleModulation = Math.abs((time % 36) - 18);
  const progress = Math.floor(((length - (length - time)) / length) * 100);
  return (
    <TimerSection angleMod={angleModulation} progress={progress}>
      {timeString}
    </TimerSection>
  );
};

export default Timer;
