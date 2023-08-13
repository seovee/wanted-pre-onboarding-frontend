import { styled } from "styled-components";
import Container from "../components/Container";

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

const SignButton = styled.button`
  border-radius: 10px;
  height: 40px;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function Signup() {
  return (
    <Container>
      <SignupTitle>회원가입</SignupTitle>
      <SignupForm>
        <SignupInput
          type="email"
          aria-label="이메일"
          name="email"
          placeholder="이메일을 입력해 주세요."
        />
        <SignupInput
          type="password"
          aria-label="비밀번호"
          name="password"
          placeholder="비밀번호를 입력해주세요"
        />
        {true ? (
          <SignButton>회원가입</SignButton>
        ) : (
          <SignButton disabled style={{ cursor: "not-allowed" }}>
            회원가입
          </SignButton>
        )}
      </SignupForm>
    </Container>
  );
}

export default Signup;
