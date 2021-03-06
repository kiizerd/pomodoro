import styled from "styled-components";

interface ButtonProps {
  color?: string;
  textColor?: string;
  borderColor?: string;
  children: string;
  onClick?: () => void;
}

const StyledButton = styled.button<
  Pick<ButtonProps, "color" | "textColor" | "borderColor">
>`
  background: ${(p) => (p.color ? p.color : "#4CAF50")};
  margin-right: 12px;
  padding: 9px 22px 9px 26px;
  border-radius: 3px;
  border: none;
  border-right: 4px solid ${(p) => (p.borderColor ? p.borderColor : "#388E3C")};
  font-size: 18px;
  transition: all 0.3s ease-in-out;
  color: ${(p) => (p.textColor ? p.textColor : "#0C0C0C")};
  :hover {
    filter: brightness(115%);
    transform: scale(1.1);
    cursor: pointer;
  }
  :last-child {
    margin-right: 0;
  }
`;

const Button = ({
  borderColor,
  color,
  textColor,
  children,
  onClick,
}: ButtonProps) => (
  <StyledButton
    onClick={onClick}
    color={color}
    textColor={textColor}
    borderColor={borderColor}
  >
    {children}
  </StyledButton>
);

export default Button;
