import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 860px) {
    ${(props) => props.gridArea && `grid-area: ${props.gridArea}`}
  }
`;