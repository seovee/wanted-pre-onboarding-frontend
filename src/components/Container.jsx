import { styled } from "styled-components";

const ContainerWarpper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Container({ children }) {
  return <ContainerWarpper>{children}</ContainerWarpper>;
}

export default Container;
