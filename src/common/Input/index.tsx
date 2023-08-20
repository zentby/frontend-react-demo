import { useId } from "react";
import styled from "styled-components";

export interface InputProps {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  type?: string;
}

const InputWrapper = styled.input<{ disabled: boolean }>`
  ${({ disabled }) =>
    disabled &&
    `
      background-color: #f0f0f0;
      cursor: not-allowed;
    `}
  font-family: "National 2", "Source Sans Pro", system-ui, sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0px;
  color: unset;
  border-radius: 0.25rem;
  border: 1px solid rgb(97, 97, 97);
  height: 3rem;
  box-sizing: border-box;
  margin-top: 0.5rem;
  padding: 0.75rem 1rem;
  width: 100%;
  order: 4;
`;

const InputLabel = styled.label`
  color: rgb(34, 34, 34);
  display: flex;
  flex: 1 1 0%;
  font-family: "National 2", "Source Sans Pro", system-ui, sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0px;
  order: 1;
`;

export const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  disabled = false,
  type = "text",
}: InputProps) => {
  const inputId = useId();
  return (
    <div>
      <InputLabel htmlFor={inputId}>{label}</InputLabel>
      <InputWrapper
        id={inputId}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        type={type}
      />
    </div>
  );
};
