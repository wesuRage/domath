"use client";

import Main from "@/components/Main/Main";
import Paragraph from "@/components/Paragraph/Paragraph";
import Sidebar from "@/components/Sidebar/Sidebar";
import Title from "@/components/Title/Title";
import Topic from "@/components/Topic/Topic";
import Underline from "@/components/Underline/Underline";
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
            matemática, então terão conteúdos do mais{" "}
            <Underline>básico</Underline> até o mais{" "}
            <Underline>avançado</Underline>.
          </Paragraph>
          <br />
          <Paragraph>
            Para iniciar os seus estudos, é importante que além de{" "}
            <Underline>focar no conteúdo</Underline>, procure vários{" "}
            <Underline>exercícios</Underline> para fortalecer seu aprendizado.
          </Paragraph>
          <br />
          <Paragraph>
            Bons estudos e <Underline>divirta-se</Underline>!
          </Paragraph>
        </Main>
      </Wrapper>
    </>
  );
}
