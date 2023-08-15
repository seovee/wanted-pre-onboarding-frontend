import { useState } from "react";
import { styled } from "styled-components";
import Input from "../components/Input";
import Button from "../components/Button";
import Container from "../components/Container";
import PageTitle from "../components/PageTitle";
import { useNavigate } from "react-router-dom";

const SigninForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 30vw;
`;

function Signin() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    const emailValue = e.target.value;
    setLoginEmail(emailValue);
  };

  const onChangePassword = (e) => {
    const passwordValue = e.target.value;
    setLoginPassword(passwordValue);
  };

  const isValidEmail = loginEmail.includes("@");
  const isValidPassword = loginPassword.length > 7;
  const buttonActive = isValidEmail && isValidPassword === true;

  const SigninSubmit = (e) => {
    e.preventDefault();
    navigate("/todo");
  };

  return (
    <Container>
      <PageTitle title="로그인" />
      <SigninForm onSubmit={SigninSubmit}>
        <Input
          type="email"
          placeholder="@가 포함된 이메일을 입력해 주세요."
          onChange={onChangeEmail}
          data-testid="email-input"
        />
        <Input
          type="password"
          placeholder="8자리 비밀번호를 입력해주세요"
          onChange={onChangePassword}
          data-testid="password-input"
        />
        <Button
          title="로그인"
          disabled={!buttonActive}
          data-testid="signin-button"
        />
      </SigninForm>
    </Container>
  );
}

export default Signin;
