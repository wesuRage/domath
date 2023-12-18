"use client";

import Topic from "../../Topic/Topic";
import { Container } from "./styles";
import Anchor from "@/components/Anchor/Anchor";

export default function Nav() {
  return (
    <Container>
      <Topic>Início</Topic>
      <Anchor href="/matematica_basica/introducao">Introdução</Anchor>

      <Topic>Operações básicas</Topic>
      <Anchor href="/matematica_basica/adicao_e_subtracao">
        Adição e subtração
      </Anchor>
      <Anchor href="/matematica_basica/multiplicacao_e_divisao">
        Multiplicação e divisão
      </Anchor>
    </Container>
  );
}
