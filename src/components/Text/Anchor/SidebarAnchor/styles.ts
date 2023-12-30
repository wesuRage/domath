import Link from "next/link";
import styled from "styled-components";

export const Anc = styled(Link)`
  padding-left: 20px;
  margin-left: 10px;
  text-decoration: none;

  &::before {
    content: "\2022";
    padding: 10px;
    color: var(--main-color);
  }

  text-align: left;
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

  &:hover::before {
    color: var(--bg-color);
  }
`;
