import { styled } from "styled-components";
import Container from "../components/Container";
import Button from "../components/Button";
import { useCallback, useState } from "react";

const SignupTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  margin: 50px;
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 30vw;
`;

const SignupInput = styled.input`
  height: 40px;
  border: 1px solid darkgrey;
  padding: 0 10px;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const SignupAlert = styled.p`
  text-align: center;
  font-size: 14px;
  color: red;
  margin: 0;
  padding: 0;
  height: 20px;
  float: right;
`;

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
  console.log(buttonActive);

  return (
    <Container>
      <SignupTitle>회원가입</SignupTitle>
      <SignupForm>
        <SignupInput
          type="email"
          aria-label="이메일"
          name="email"
          placeholder="이메일을 입력해 주세요."
          onChange={onChangeEmail}
        />
        {!isValidEmail ? <SignupAlert>"@"을 입력해주세요.</SignupAlert> : null}
        <SignupInput
          type="password"
          aria-label="비밀번호"
          name="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={onChangePassword}
        />
        {!isValidPassword ? (
          <SignupAlert>8자리 이상 입력해주세요.</SignupAlert>
        ) : null}
        <Button title="회원가입" disabled={buttonActive} />
      </SignupForm>
    </Container>
  );
}

export default Signup;
