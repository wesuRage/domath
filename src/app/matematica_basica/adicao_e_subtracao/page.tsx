"use client";

import InlineAnchor from "@/components/Text/Anchor/InlineAnchor/InlineAnchor";
import List from "@/components/Text/List/List";
import Main from "@/components/Main/Main";
import MathBlock from "@/components/Math/Block/Block";
import MathInline from "@/components/Math/Inline/Inline";
import Paragraph from "@/components/Text/Paragraph/Paragraph";
import Sidebar from "@/components/Sidebar/Sidebar";
import Title from "@/components/Text/Title/Title";
import Topic from "@/components/Text/Topic/Topic";
import Underline from "@/components/Text/Underline/Underline";
import { Wrapper } from "@/components/Wrapper/Wrapper";

export default function AdicaoESubtracao() {
  return (
    <Wrapper>
      <Sidebar />

      <Main>
        <Title>Adição</Title>

        <Paragraph>
          A adição é uma operação básica na aritmética que combina dois ou mais
          números para formar uma <Underline>soma</Underline>. O símbolo
          matemático para a adição é o sinal de mais (<MathInline math="+" />
          ).
        </Paragraph>

        <br />

        <Paragraph>
          Para efetuar uma adição, precisamos pegar os números e alinhar as{" "}
          <Underline>unidades</Underline>, <Underline>dezenas</Underline>,{" "}
          <Underline>centenas</Underline>... E só após então, podemos começar a
          somar unidade com unidade, dezena com dezena, e assim vai. Para um
          melhor exemplo, clique e assista um clipe da{" "}
          <InlineAnchor
            newTab
            marginoff
            redon
            href="https://youtube.com/clip/UgkxNrHjAUfkjbGTCQBcqdJR2ZYU2yZfXZJy?si=KWGyDYEdxqmx24qS"
          >
            aula do Professor Ferreto
          </InlineAnchor>
          .
        </Paragraph>
        <br />

        <Paragraph>
          Quando tratamos de números decimais (números com vígula. ex:{" "}
          <MathInline math="3,14" />
          ), para armarmos a conta, colocamos virgula embaixo de virgula{" "}
          <Underline>tanto em adição quando em subtração</Underline>. Para um
          melhor exemplo, clique e assista um clipe da{" "}
          <InlineAnchor
            newTab
            marginoff
            redon
            href="https://youtube.com/clip/UgkxuVIJ5n-WKU8uBdRJDiypRnIgbgR795Da?si=YEsSV5dbkC3khkj9"
          >
            aula do Professor Ferreto
          </InlineAnchor>
          .
        </Paragraph>

        <Topic>Propriedades</Topic>
        <List index={1}>Elemento nêutro</List>
        <Paragraph>Somar zero não altera o resultado.</Paragraph>
        <MathBlock math="a + 0 = a\quad |\quad 3 + 0 = 3" />

        <List index={2}>Comutatividade</List>
        <Paragraph>A ordem da soma não altera o resultado.</Paragraph>
        <MathBlock math="a + b = b + a\quad |\quad 2 + 3 = 3 + 2" />

        <List index={3}>Associatividade</List>
        <Paragraph>
          A ordem da soma independentemente de como agrupados não altera o
          resultado.
        </Paragraph>
        <MathBlock math="(a + b) + c = a + (b + c)\quad |\quad (1 + 2) + 3 = 1 + (2 + 3)" />
        <List index={4}>Inverso Aditivo</List>
        <Paragraph>Um número somado ao seu inverso resulta em zero.</Paragraph>
        <MathBlock math="a + (-a) = 0\quad |\quad 2 + (-2) = 0" />

        <Title>Subtração</Title>

        <Paragraph>
          Como a adição, a subtração utiliza dois ou mais números para formar
          uma operação chamada de <Underline>diferença</Underline>. O símbolo
          matemático para a subtração é o sinal de menos (
          <MathInline math="-" />
          ).
        </Paragraph>

        <br />

        <Paragraph>
          Assim que armarmos a conta, precisamos levar em consideração se o
          número que está em cima é <Underline>maior ou menor</Underline> do que
          o número que está embaixo. Por exemplo, <MathInline math="5 - 3" /> é
          diferente de <MathInline math="3 - 5" />, pois se eu tenho{" "}
          <MathInline math="5" /> e tiro <MathInline math="3" /> eu fico com{" "}
          <MathInline math="2" />. Já se eu tenho <MathInline math="3" /> e tiro{" "}
          <MathInline math="5" />, vou chegar a um resultado negativo (
          <MathInline math="-2" />
          ). Por esta razão, não podemos realizar o cálculo de uma conta armada
          de qualquer forma, é sempre o{" "}
          <Underline>número de cima menos o de número baixo</Underline>. E caso
          o numero de baixo for maior que o de cima, tome cuidado, pois pode
          acabar fazendo a conta errado. Você precisa{" "}
          <Underline>emprestar</Underline> uma dezena do número ao lado, aí
          então sim realizar a subtração. Para um melhor exemplo, clique e
          assista um clipe da{" "}
          <InlineAnchor
            newTab
            marginoff
            redon
            href="https://youtube.com/clip/UgkxdEusv9BK_15lGCms9EEy7dPkWvhC13P3?si=j9xfxzRInh79C4_2"
          >
            aula do Professor Ferreto
          </InlineAnchor>
          .
        </Paragraph>

        <Topic>Propriedades</Topic>
        <List index={1}>Elemento nêutro</List>
        <Paragraph>Subtrair por zero não altera o resultado.</Paragraph>
        <MathBlock math="a - 0 = a\quad |\quad 3 - 0 = 3" />

        <List index={2}>Não comutatividade</List>
        <Paragraph>A ordem da operação altera o resultado.</Paragraph>
        <MathBlock math="2 - 3 ≠ 3 - 2" />

        <List index={3}>Associação de subtração</List>
        <Paragraph>
          A subtração não é associativa. Em outras palavras,{" "}
          <MathInline math="(a-b)-c" /> não é igual à{" "}
          <MathInline math="a-(b-c)" />.{" "}
          <Underline>A ordem dos parênteses afeta o resultado</Underline>.
        </Paragraph>
        <MathBlock math="(3 - 4) - 2 ≠ 3 - (4 - 2)" />

        <br />
        <br />
        <br />
      </Main>
    </Wrapper>
  );
}
