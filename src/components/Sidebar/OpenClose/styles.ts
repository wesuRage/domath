import styled from "styled-components";

export const Button = styled.button`
  font-size: 20px;
  width: 30px;
  color: var(--red);
  background-color: black;

  border-left: solid 1px var(--red);
  border-right: solid 1px var(--red);
  border-top: solid 1px black;
  border-bottom: solid 1px black;

  transition: 0.2s;

  padding: 0;
  height: 100svh;

  &:hover {
    color: black;
    background-color: var(--red);
  }
`;
