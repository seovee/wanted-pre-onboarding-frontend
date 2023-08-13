import { styled } from "styled-components";

function Container({ children }) {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  return <Container>{children}</Container>;
}

export default Container;
