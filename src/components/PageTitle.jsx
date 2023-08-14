import { styled } from "styled-components";

const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  margin-top: 100px;
  margin-bottom: 50px;
`;

function PageTitle(props) {
  return <Title {...props}>{props.title}</Title>;
}

export default PageTitle;
