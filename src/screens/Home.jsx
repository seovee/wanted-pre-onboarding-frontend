import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Container from "../components/Container";
import PageTitle from "../components/PageTitle";

const HomeComments = styled.p`
  font-size: 25px;
  color: gray;
`;

function Home() {
  return (
    <Container>
      <PageTitle title="Welcome To Jinseob ToDo List" />
      <HomeComments>회원가입을 안하셨다면 가입부터 해주세요 😎</HomeComments>
      <Link to={"/signup"}>회원가입</Link>
    </Container>
  );
}

export default Home;
