import Link from "next/link";
import styled from "styled-components";

export const Anc = styled(Link)`
  padding-left: 30px;
  margin-left: 10px;
  text-decoration: none;

  color: var(--text-color);

  display: block;

  &:visited {
    color: var(--text-color);
  }

  &:hover {
    background-color: var(--main-color);
    color: var(--bg-color);
    font-weight: bold;
    border-radius: 10px;
  }
`;
