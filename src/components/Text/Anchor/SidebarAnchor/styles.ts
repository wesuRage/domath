import Link from "next/link";
import styled from "styled-components";

export const Anc = styled(Link)`
  margin-left: 40px;
  text-decoration: none;

  color: var(--text-color);

  display: inline-block;

  &:visited {
    color: var(--text-color);
  }

  &:hover {
    color: var(--main-color);
  }
`;
