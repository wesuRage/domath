import styled from "styled-components";

export const Container = styled.div`
  display: block;
  overflow-y: scroll;
  overflow-x: hidden;

  height: calc(100vh - 66px);
  max-height: calc(100vh - 66px);
  width: 300px;

  margin: 0;

  color: white;

  background-color: var(--bg-color);

  @media screen and (max-width: 550px) {
    width: calc(100vw - 30px);
  }
`;
