"use client";

import { Body, Container } from "./styles";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Body>{children}</Body>
    </Container>
  );
}
