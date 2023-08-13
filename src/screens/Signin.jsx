import { styled } from "styled-components";
import Button from "../components/Button";
import Container from "../components/Container";
import Input from "../components/Input";
import PageTitle from "../components/PageTitle";

const Warpper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 30vw;
`;

function Signin() {
  return (
    <Container>
      <PageTitle title="로그인" />
      <Warpper>
        <Input type="email" placeholder="이메일을 입력해 주세요." />
        <Input type="password" placeholder="비밀번호를 입력해주세요" />
        <Button title="로그인" disabled={true} />
      </Warpper>
    </Container>
  );
}

export default Signin;
