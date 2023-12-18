import Link from "next/link";
import styled from "styled-components";

export const Anc = styled(Link)<{
  MarginOff?: boolean;
  RedOn?: boolean;
}>`
  margin-left: ${(props) => (props.MarginOff ? "0" : "40px")};
  color: ${(props) => (props.RedOn ? "var(--red)" : "white")};
  text-decoration: none;

  display: inline-block;

  &:hover {
    color: var(--red);
  }

  &:focus {
    color: var(--red);
  }
`;
