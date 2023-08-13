import { styled } from "styled-components";

const Title = styled.h1`
  font-size: 25px;
  font-weight: 600;
  margin-top: 100px;
  margin-bottom: 50px;
`;

function PageTitle({ props, title }) {
  return <Title {...props}>{title}</Title>;
}

export default PageTitle;
