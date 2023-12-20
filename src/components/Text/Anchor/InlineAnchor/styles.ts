import Link from "next/link";
import styled from "styled-components";

export const Anc = styled(Link)`
  margin-left: 0;
  color: var(--main-color);
  text-decoration: none;

  display: inline-block;

  &:visited {
    color: var(--main-color);
  }

  &:hover {
    color: var(--main-color);
    text-decoration: underline;
    text-decoration-color: var(--main-color);
    text-decoration-thickness: 2px;
  }

  &:focus {
    color: var(--main-color);
  }
`;
