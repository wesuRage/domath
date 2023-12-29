"use client";

import Main from "@/components/Main/Main";
import Paragraph from "@/components/Text/Paragraph/Paragraph";
import Sidebar from "@/components/Sidebar/Sidebar";
import Title from "@/components/Text/Title/Title";
import Topic from "@/components/Text/Topic/Topic";
import { Wrapper } from "@/components/Wrapper/Wrapper";

export default function Introducao() {
  return (
    <>
      <Wrapper>
        <Sidebar />

        <Main>
          <Title>Bem vindo!</Title>

          <Topic>Como usar este site</Topic>

          <Paragraph>
            Este site é dedicado à pessoas que querem se aprofundar em
            matemática, então terão conteúdos do mais básico até o mais{" "}
            avançado.
          </Paragraph>
          <br />
          <Paragraph>
            Para iniciar os seus estudos, é importante que além de focar no
            conteúdo, procure vários exercícios para fortalecer seu aprendizado.
          </Paragraph>
          <br />
          <Paragraph>Bons estudos e divirta-se!</Paragraph>
        </Main>
      </Wrapper>
    </>
  );
}
