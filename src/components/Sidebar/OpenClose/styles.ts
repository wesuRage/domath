import styled from "styled-components";

export const Button = styled.button`
  font-size: 20px;
  width: 30px;
  color: var(--main-color);
  background-color: var(--bg-color);

  border-left: solid 1px var(--main-color);
  border-right: solid 1px var(--main-color);
  border-top: solid 1px var(--bg-color);
  border-bottom: solid 1px var(--bg-color);

  transition: 0.2s;

  padding: 0;
  height: 100svh;

  &:hover {
    color: var(--bg-color);
    background-color: var(--main-color);

    border-top: solid 1px var(--main-color);
    border-bottom: solid 1px var(--main-color);
  }
`;
