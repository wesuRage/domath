"use client";

import Anchor from "@/components/Text/Anchor/InlineAnchor/InlineAnchor";
import Main from "@/components/Main/Main";
import Paragraph from "@/components/Text/Paragraph/Paragraph";
import Sidebar from "@/components/Sidebar/Sidebar";
import Title from "@/components/Text/Title/Title";
import Topic from "@/components/Text/Topic/Topic";
import { Wrapper } from "@/components/Wrapper/Wrapper";

export default function Home() {
  return (
    <>
      <Wrapper>
        <Sidebar />

        <Main>
          <Title>404</Title>
          <Topic>Opss...</Topic>
          <Paragraph>
            Infelizmente parece que você acessou uma página que não existe.{" "}
            <Anchor marginoff={true} redon={true} href="/">
              Clique aqui para retornar ao início
            </Anchor>
          </Paragraph>
        </Main>
      </Wrapper>
    </>
  );
}
