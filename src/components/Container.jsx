import { styled } from "styled-components";

const ContainerWarpper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Container({ props, children }) {
  return <ContainerWarpper {...props}>{children}</ContainerWarpper>;
}

export default Container;
