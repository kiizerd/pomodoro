import styled from "styled-components";

const StyledButtons = styled.section`
  margin: 10px;
  padding: 8px 4px;
  display: flex;
  }
`;

type Props = {
  children: Array<JSX.Element>;
};

const ButtonGroup = ({ children }: Props) => {
  return <StyledButtons>{children}</StyledButtons>;
};

export default ButtonGroup;
