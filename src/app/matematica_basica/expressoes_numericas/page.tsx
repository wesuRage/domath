"use client";

import Main from "@/components/Main/Main";
import MathBlock from "@/components/Math/Block/Block";
import MathInline from "@/components/Math/Inline/Inline";
import Sidebar from "@/components/Sidebar/Sidebar";
import InlineAnchor from "@/components/Text/Anchor/InlineAnchor/InlineAnchor";
import List from "@/components/Text/List/List";
import Paragraph from "@/components/Text/Paragraph/Paragraph";
import Title from "@/components/Text/Title/Title";
import Topic from "@/components/Text/Topic/Topic";
import { Wrapper } from "@/components/Wrapper/Wrapper";

export default function ExpressoesNumericas() {
  return (
    <Wrapper>
      <Sidebar />

      <Main>
        <Title>Expressões numéricas</Title>
        <Paragraph>
          Expressões numéricas são combinações matemáticas de números e
          operadores. Essas expressões são frequentemente usadas para descrever
          relações e operações em matemática. As expressões numéricas podem
          envolver uma variedade de elementos, como adição, subtração,
          multiplicação, divisão, expoentes, parênteses e outros símbolos
          matemáticos.
        </Paragraph>

        <br />

        <Paragraph>
          Essas expressões têm uma ordem de resolução que precisa ser respeitada
          para que o cálculo seja efetuado corretamente.
        </Paragraph>

        <Topic>Prioridade de resolução</Topic>
        <List index={1}>Parênteses, colchetes e chaves</List>
        <MathBlock math="\text{\{[()]\}}" />

        <List index={2}>Exponenciação e radiciação</List>
        <MathBlock math="x^2 \quad \sqrt{x}" />

        <List index={3}>Multiplicação e divisão</List>
        <MathBlock math="× \quad ÷" />

        <List index={4}>Adição e subtração</List>
        <MathBlock math="+ \quad -" />

        <Topic>Exemplos</Topic>
        <Paragraph>
          Vamos começar simples e ir aumentando o grau da complexidade. CUIDADO,
          não esqueça de prestar atenção na regra de sinais. Caso haja alguma
          duvida, veja a{" "}
          <InlineAnchor href="https://www.youtube.com/watch?v=RrjtgevcYjw">
            aula do Professor Sandro Curió
          </InlineAnchor>
          . Além disso, se tivermos uma expressão com ordem de precedência
          igual, como a de soma e subtração: <MathInline math="9-5+2" />,
          precisamos começar da esquerda para a direita, senão o resultado vai
          mudar.
        </Paragraph>
        <br />

        <Paragraph>Exemplo 1:</Paragraph>
        <br />
        <Paragraph>
          <MathInline math="9-5+2" />
          <br />
          <br />
          <MathInline math="\underline{9-5}+2" />
          <br />
          <MathInline math="\underline{4+2}" />
          <br />
          <MathInline math="6" />
        </Paragraph>

        <Paragraph>Exemplo 2:</Paragraph>
        <br />
        <Paragraph>
          <MathInline math="1 + 2 * 4" />
          <br />
          <br />
          <MathInline math="1 + \underline{2 * 4}" />
          <br />
          <MathInline math="\underline{1 + 8}" />
          <br />
          <MathInline math="9" />
        </Paragraph>
        <br />

        <Paragraph>Exemplo 3:</Paragraph>
        <br />
        <Paragraph>
          <MathInline math="3 * (4 - 8 ÷ 4)" />
          <br />
          <br />
          <MathInline math="3 * (4 - \underline{8 ÷ 4})" />
          <br />
          <MathInline math="3 * (\underline{4 - 2})" />
          <br />
          <MathInline math="\underline{3 * 2}" />
          <br />
          <MathInline math="6" />
        </Paragraph>
        <br />

        <Paragraph>Exemplo 4:</Paragraph>
        <br />
        <Paragraph>
          <MathInline math="5 + [(5 + 7) ÷ (9-6)] - 3" />
          <br />
          <br />
          <MathInline math="5 + [(\underline{5 + 7}) ÷ (\underline{9-6})] - 3" />
          <br />
          <MathInline math="5 + [\underline{12 ÷ 3}] - 3" />
          <br />
          <MathInline math="\underline{5 + 4 - 3}" />
          <br />
          <MathInline math="6" />
        </Paragraph>
        <br />

        <Paragraph>Exemplo 5:</Paragraph>
        <br />
        <Paragraph>
          <MathInline math="60 + { 4 + [ (8 - 12 ) - ( 5 + 3 ) - 7 ] + 2}" />
          <br />
          <br />
          <MathInline math="60 + { 4 + [ (\underline{8 - 12} ) - ( \underline{5 + 3} ) - 7 ] + 2}" />
          <br />
          <MathInline math="60 + { 4 + [ \underline{-4 - 8 - 7} ] + 2}" />
          <br />
          <MathInline math="60 + \{\underline{4 - 19 + 2}\}" />
          <br />
          <MathInline math="\underline{60 - 13}" />
          <br />
          <MathInline math="47" />
        </Paragraph>
        <br />

        <Paragraph>
          Para mais exemplos veja a{" "}
          <InlineAnchor href="https://youtu.be/BhDm2qGy780?t=407">
            aula do Professor Ferreto
          </InlineAnchor>
          .
        </Paragraph>
      </Main>
    </Wrapper>
  );
}
