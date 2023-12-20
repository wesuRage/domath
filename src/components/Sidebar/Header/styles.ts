import styled from "styled-components";

export const Topheader = styled.header`
  width: 300px;
  max-height: 66px;
  background-color: var(--bg-color);
  color: var(--text-color);

  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  border-bottom: solid 1px var(--main-color);

  p {
    display: inline-block;
  }

  @media screen and (max-width: 550px) {
    width: calc(100vw - 30px);
  }
`;

export const H1 = styled.h1`
  display: inline-block;
  font-size: 20px;
  padding: 20px 0;
  margin: 0;
  margin-left: 20px;
`;
