import styled from "styled-components";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";

interface StatsProps {
  completions: CompletedTimers;
}

interface StatStyleProps {
  isHidden?: boolean;
}

const StyledStats = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  background: #a6b6b6;
  border-radius: 5px;
  border-right: 6px solid #657575;
`;

const StatHeader = styled.div<StatStyleProps>`
  display: flex;
  cursor: pointer;
  font-size: 18px;
  padding: 6px 12px;
  align-items: center;

  svg {
    margin-left: 8px;
    transition: transform 0.2s ease-in;
    ${(p) => (p.isHidden ? "" : "transform: rotate(180deg);")}
    :hover {
      cursor: pointer;
      transform: ${(p) =>
        p.isHidden ? "scale(1.1)" : "rotate(180deg) scale(1.1)"};
    }
  }
`;

const StatSectionList = styled.ul<StatStyleProps>`
  margin: 0;
  top: 100%;
  left: 16px;
  width: 85%;
  padding: 0;
  position: absolute;
  transition: transform 0.3s ease-in-out;
  transform: scaleY(${(p) => (p.isHidden ? "0" : "1.0")});
  transform-origin: top center;
  background: #b6c6c6;
  border-radius: 0 0 5px 5px;
  border-right: 4px solid #657575;
`;

const StatSection = styled.section`
  display: flex;
  padding: 10px 12px 10px;
  justify-content: space-around;
  border-bottom: 2px solid #657575;
  // Space from the right side of the number
  > div {
    &:first-child {
      margin-right: 8px;
    }
  }
  // Space from the bottom of last section
  &:last-child {
    margin-bottom: 2px;
    border: none;
  }
`;

const Stats = ({ completions }: StatsProps) => {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

  return (
    <StyledStats>
      <StatHeader onClick={toggleHidden} isHidden={hidden}>
        Completed Timers
        <BsChevronDown />
      </StatHeader>
      <StatSectionList isHidden={hidden}>
        <StatSection>
          <div>{completions.work}</div>
          <div>work timers</div>
        </StatSection>
        <StatSection>
          <div>{completions.shortBreak}</div>
          <div>short breaks</div>
        </StatSection>
        <StatSection>
          <div>{completions.longBreak}</div>
          <div>long breaks</div>
        </StatSection>
      </StatSectionList>
    </StyledStats>
  );
};

export default Stats;
