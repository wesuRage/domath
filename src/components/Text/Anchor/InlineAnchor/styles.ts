import Link from "next/link";
import styled from "styled-components";

export const Anc = styled(Link)`
  margin-left: 0;
  color: var(--red);
  text-decoration: none;

  display: inline-block;

  &:visited {
    color: var(--red);
  }

  &:hover {
    color: var(--red);
    text-decoration: underline;
    text-decoration-color: var(--red);
    text-decoration-thickness: 2px;
  }

  &:focus {
    color: var(--red);
  }
`;
