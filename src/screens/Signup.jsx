import { styled } from "styled-components";
import Container from "../components/Container";
import Button from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import PageTitle from "../components/PageTitle";

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 30vw;
`;

const SignupAlertContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const SignupAlert = styled.p`
  text-align: center;
  font-size: 12px;
  color: red;
  margin: 0;
  padding: 0;
  height: 20px;
  float: right;
`;

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
  };

  const onChangePassword = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
  };

  const isValidEmail = email.includes("@");
  const isValidPassword = password.length > 7;
  const buttonActive = isValidEmail && isValidPassword === true;

  const SignSubmit = async (e) => {
    e.preventDefault();
    navigate("/signin");
  };

  return (
    <Container>
      <PageTitle title="회원가입" />
      <SignupForm onSubmit={SignSubmit}>
        <Input
          type="email"
          placeholder="이메일을 입력해 주세요."
          onChange={onChangeEmail}
          data-testid="email-input"
        />
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={onChangePassword}
          data-testid="password-input"
        />
        <Button
          title="회원가입"
          disabled={!buttonActive}
          data-testid="signup-button"
        />
      </SignupForm>
      <SignupAlertContainer>
        {!isValidEmail ? <SignupAlert>"@"을 입력해주세요.</SignupAlert> : null}
        {!isValidPassword ? (
          <SignupAlert>8자리 이상 입력해주세요.</SignupAlert>
        ) : null}
      </SignupAlertContainer>
    </Container>
  );
}

export default Signup;
