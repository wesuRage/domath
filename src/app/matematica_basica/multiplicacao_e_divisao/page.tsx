"use client";

import Main from "@/components/Main/Main";
import MathInline from "@/components/Math/Inline/Inline";
import Paragraph from "@/components/Paragraph/Paragraph";
import Sidebar from "@/components/Sidebar/Sidebar";
import Title from "@/components/Title/Title";
import Topic from "@/components/Topic/Topic";
import Underline from "@/components/Underline/Underline";
import { Wrapper } from "@/components/Wrapper/Wrapper";

export default function MultiplicacaoEDivisao() {
  return (
    <>
      <Wrapper>
        <Sidebar />
        <Main>
          <Title>Multiplicação</Title>

          <Paragraph>
            A multiplicação é uma operação matemática fundamental que combina
            dois números, chamados de <Underline>multiplicando</Underline> e{" "}
            <Underline>multiplicador</Underline>, para produzir um resultado
            chamado <Underline>produto</Underline>. A notação matemática para a
            multiplicação pode ser <MathInline math="3×5" />,{" "}
            <MathInline math="3\cdot5" />, <MathInline math="3(5)" /> ou{" "}
            <MathInline math="(3)(5)" /> e a operação é lida como "vezes" ou
            "multiplicado por".
          </Paragraph>

          <Topic>Regra de sinais</Topic>
          <Paragraph>
            O produto entre <Underline>dois números de sinais iguais</Underline>{" "}
            é <Underline>positivo</Underline> e o produto entre{" "}
            <Underline>dois números de sinais contrários</Underline> é{" "}
            <Underline>negativo</Underline>:
          </Paragraph>
          <br />
          <Paragraph>
            <MathInline math="3\cdot5 = 15" />
          </Paragraph>
          <Paragraph>
            <MathInline math="3\cdot(-5) = -15" />
          </Paragraph>
          <Paragraph>
            <MathInline math="(-3)\cdot5 = -15" />
          </Paragraph>
          <Paragraph>
            <MathInline math="(-3)\cdot(-5) = 15" />
          </Paragraph>
        </Main>
      </Wrapper>
    </>
  );
}
