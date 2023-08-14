import { styled } from "styled-components";

const ContainerWarpper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Container(props) {
  return <ContainerWarpper {...props}>{props.children}</ContainerWarpper>;
}

export default Container;
