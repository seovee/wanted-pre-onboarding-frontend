import { styled } from "styled-components";
import Button from "../components/Button";
import Container from "../components/Container";
import Input from "../components/Input";
import PageTitle from "../components/PageTitle";
import { useState } from "react";

const Warpper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 30vw;
`;

function Signin() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

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

  return (
    <Container>
      <PageTitle title="로그인" />
      <Warpper>
        <Input
          type="email"
          placeholder="@가 포함된 이메일을 입력해 주세요."
          onChange={onChangeEmail}
        />
        <Input
          type="password"
          placeholder="8자리 비밀번호를 입력해주세요"
          onChange={onChangePassword}
        />
        <Button title="로그인" disabled={!buttonActive} />
      </Warpper>
    </Container>
  );
}

export default Signin;
