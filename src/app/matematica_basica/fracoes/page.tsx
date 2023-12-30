"use client";

import Main from "@/components/Main/Main";
import MathInline from "@/components/Math/Inline/Inline";
import Sidebar from "@/components/Sidebar/Sidebar";
import Paragraph from "@/components/Text/Paragraph/Paragraph";
import Title from "@/components/Text/Title/Title";
import { Wrapper } from "@/components/Wrapper/Wrapper";

export default function Fracoes() {
  return (
    <Wrapper>
      <Sidebar />
      <Main>
        <Title>Frações</Title>
        <Paragraph>
          Uma fração representa uma parte de um todo, ou seja, representa um
          pedaço de algo inteiro. Na sua essência é uma divisão, e sua notação é
          escrita e lida como: <MathInline math="\frac{1}{2}" />
          (um meio), <MathInline math="\frac{3}{4}" />
          (três quartos)
        </Paragraph>
      </Main>
    </Wrapper>
  );
}
