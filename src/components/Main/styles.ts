import styled from "styled-components";

export const Body = styled.div`
  background-color: black;
  color: white;
  border: solid 1px var(--red);

  overflow-y: scroll;

  text-align: justify;
  text-justify: inter-word;

  max-width: 1500px;
  max-height: calc(100vh - 60px);
  height: calc(100vh - 60px);

  padding: 20px;
  margin: 30px;

  display: inline-block;

  @media screen and (max-width: 550px) {
    font-size: 12px;
    margin: 0px;
    margin-top: 10px;
    margin-bottom: 10px;

    padding: 0px;

    max-width: calc(100vw - 50px);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 550px) {
    margin-left: 5px;
  }
`;
