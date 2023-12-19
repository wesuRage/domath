"use client";

import SidebarAnchor from "@/components/Text/Anchor/SidebarAnchor/SidebarAnchor";
import Topic from "../../Text/Topic/Topic";
import { Container } from "./styles";

export default function Nav() {
  return (
    <Container>
      <Topic>Início</Topic>
      <SidebarAnchor href="/matematica_basica/introducao">
        Introdução
      </SidebarAnchor>

      <Topic>Operações básicas</Topic>
      <SidebarAnchor href="/matematica_basica/adicao_e_subtracao">
        Adição e subtração
      </SidebarAnchor>
      <SidebarAnchor href="/matematica_basica/multiplicacao_e_divisao">
        Multiplicação e divisão
      </SidebarAnchor>
    </Container>
  );
}
