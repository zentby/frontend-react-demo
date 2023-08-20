import styled, { css } from "styled-components";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  index?: number;
}

const ButtonWrapper = styled.button<ButtonProps>`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  ${(props: ButtonProps) =>
    props.disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
    `}
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  position: relative;
  text-align: center;
  transition: all 0.3s ease-out 0s;
  font-family: "National 2", "Source Sans Pro", system-ui, sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0px;
  color: rgb(255, 255, 255);
  background-color: rgb(84, 30, 75);
  border: 0px;
  border-radius: 62.5rem;
  box-shadow: none;
  min-width: 120px;
  padding: 0.75rem 1.5rem;
`;

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <ButtonWrapper onClick={onClick} disabled={disabled} label={label}>
      {label}
    </ButtonWrapper>
  );
};
