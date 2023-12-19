import Link from "next/link";
import styled from "styled-components";

export const Anc = styled(Link)`
  margin-left: 40px;
  color: "white";
  text-decoration: none;

  display: inline-block;

  &:visited {
    color: white;
  }

  &:hover {
    color: var(--red);
  }

  &:focus {
    color: var(--red);
  }
`;
