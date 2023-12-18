"use client";

import Anchor from "@/components/Anchor/Anchor";
import Main from "@/components/Main/Main";
import Paragraph from "@/components/Paragraph/Paragraph";
import Sidebar from "@/components/Sidebar/Sidebar";
import Title from "@/components/Title/Title";
import Topic from "@/components/Topic/Topic";
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
            <Anchor MarginOff RedOn href="/">
              Clique aqui para retornar ao início
            </Anchor>
          </Paragraph>
        </Main>
      </Wrapper>
    </>
  );
}
