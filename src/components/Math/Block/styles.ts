import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-left: 40px;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 10px;

  max-width: 100%;
  overflow-x: scroll;
  border: solid 1px var(--red);

  img {
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    display: inline;
    margin: 0 auto;
    margin-top: 10px;
    height: auto;
    padding: 10px;
  }
`;
