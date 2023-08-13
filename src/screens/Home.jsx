import { styled } from "styled-components";
import Container from "../components/Container";

function Home() {
  const HomeTitle = styled.h1``;
  const HomeComments = styled.p``;

  return (
    <Container>
      <HomeTitle>Welcome To Jinseob ToDo List</HomeTitle>
      <HomeComments>회원가입을 안하셨다면 가입부터 해주세요 😎</HomeComments>
    </Container>
  );
}

export default Home;
