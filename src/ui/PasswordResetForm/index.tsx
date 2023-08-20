import { useState } from "react";
import styled from "styled-components";
import { Input } from "../../common/Input";
import { Button } from "../../common/Button";

interface PasswordResetFormProps {
  onReset: (newPassword: string) => void;
}

const FormWrapper = styled.div`
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(34, 34, 34, 0.15) 0px 2px 10px;
  font-family: "National 2", "Source Sans Pro", system-ui, sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0px;
  padding: 2rem;
`;

const InputWrapper = styled.div`
  margin-bottom: 16px;
`;

const validatePassword = (password: string): boolean => {
  if (password.length >= 15) {
    return true;
  }
  if (!/\d/.test(password)) {
    return false;
  }
  const specialChars = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/\-|=]/g;
  const matches = password.match(specialChars);

  return (matches?.length ?? 0) >= 2;
};

export const PasswordResetForm: React.FC<PasswordResetFormProps> = ({
  onReset,
}: PasswordResetFormProps) => {
  const [newPassword, setNewPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handlePasswordChange = (value: string) => {
    setNewPassword(value);
    setIsValid(validatePassword(value));
  };

  const handleResetClick = () => {
    if (isValid) {
      onReset(newPassword);
      setNewPassword("");
      setIsValid(false);
    }
  };

  return (
    <FormWrapper>
      <InputWrapper>
        <Input
          label="New Password"
          value={newPassword}
          onChange={handlePasswordChange}
          type="password"
        />
      </InputWrapper>
      <Button label="Reset" onClick={handleResetClick} disabled={!isValid} />
    </FormWrapper>
  );
};
