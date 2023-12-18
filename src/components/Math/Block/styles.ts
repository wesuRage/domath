import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-left: 40px;
  margin-top: 10px;
  margin-bottom: 10px;

  max-width: 100%;
  overflow-x: scroll;
  border: solid 1px var(--red);

  img {
    display: inline;
    margin: 0 auto;
    height: auto;
    padding: 10px;
  }
`;
