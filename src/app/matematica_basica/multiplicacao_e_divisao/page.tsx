"use client";

import Main from "@/components/Main/Main";
import MathInline from "@/components/Math/Inline/Inline";
import Paragraph from "@/components/Text/Paragraph/Paragraph";
import Sidebar from "@/components/Sidebar/Sidebar";
import Title from "@/components/Text/Title/Title";
import Topic from "@/components/Text/Topic/Topic";
import { Wrapper } from "@/components/Wrapper/Wrapper";
import InlineAnchor from "@/components/Text/Anchor/InlineAnchor/InlineAnchor";
import List from "@/components/Text/List/List";
import MathBlock from "@/components/Math/Block/Block";
import Images from "@/components/Images/Images";

export default function MultiplicacaoEDivisao() {
  return (
    <Wrapper>
      <Sidebar />
      <Main>
        <Title>Multiplicação</Title>
        <Paragraph>
          A multiplicação é uma operação matemática fundamental que combina dois
          números, chamados de multiplicando e multiplicador, para produzir um
          resultado chamado produto. A notação matemática para a multiplicação
          pode ser <MathInline math="3×5" />, <MathInline math="3\cdot5" />,{" "}
          <MathInline math="3(5)" /> ou <MathInline math="(3)(5)" /> e a
          operação é lida como " vezes" ou " multiplicado por".
        </Paragraph>
        <br />

        <Paragraph>
          Multiplicação na sua essência é baseada na soma repetida de um mesmo
          número. Exemplo: <MathInline math="4" /> vezes <MathInline math="2" />{" "}
          significa o número <MathInline math="2" /> somado com ele mesmo{" "}
          <MathInline math="4" /> vezes (<MathInline math="2+2+2+2=8" />
          ). Assim como <MathInline math="2" /> vezes <MathInline math="4" /> é
          o número <MathInline math="4" /> somado com ele mesmo{" "}
          <MathInline math="2" /> vezes (<MathInline math="4+4=8" />
          ). Nós somamos quatro vezes o dois e somamos duas vezes o quatro.
        </Paragraph>

        <br />
        <Paragraph>
          Para realizar uma multiplicação com conta armada, precisa-se{" "}
          multiplicar cada algarísmo de cima pelo mesmo algarismo de baixo. No
          final, somar os resultados. Para um melhor exemplo, clique e assista a{" "}
          <InlineAnchor
            newTab
            marginoff
            redon
            href="https://youtu.be/0UGJRHq2PS4?t=213"
          >
            aula do Professor Ferreto
          </InlineAnchor>{" "}
          do minuto 3:33 até 5:37.
        </Paragraph>
        <br />
        <Paragraph>
          Quando se há multiplicação decimal (com vírgula ), primeiro esquecemos
          as virgulas e multiplicamos normalmente . Depois que multiplicarmos,
          contamos quantas casas decimais há no total dos números multiplicados.
          Se forem <MathInline math="2" />, colocamos a vírgula depois do
          segundo número (da direita pra esquerda). Se forem{" "}
          <MathInline math="3" />, colocamos a vírgula depois do terceiro
          número, e assim por diante. Para um melhor exemplo, clique e assista a{" "}
          <InlineAnchor
            newTab
            marginoff
            redon
            href="https://youtu.be/0UGJRHq2PS4?t=361"
          >
            aula do Professor Ferreto
          </InlineAnchor>{" "}
          do minuto 6:01 até 9:42.
        </Paragraph>

        <Topic>Regra de sinais</Topic>
        <Paragraph>
          O produto entre dois números de sinais iguais é positivo e o produto
          entre dois números de sinais contrários é negativo:
        </Paragraph>
        <br />
        <Paragraph>
          <MathInline math="3\cdot5 = 15" />
          <br />
          <MathInline math="3\cdot(-5) = -15" />
          <br />
          <MathInline math="(-3)\cdot5 = -15" />
          <br />
          <MathInline math="(-3)\cdot(-5) = 15" />
        </Paragraph>

        <Topic>Propriedades</Topic>
        <List index={1}>Elemento nêutro</List>
        <Paragraph>
          Multiplicar por <MathInline math="1" /> não altera o resultado.
        </Paragraph>
        <MathBlock math="a\cdot 1 = a\quad |\quad 3 \cdot 1 = 3" />

        <List index={2}>Anulação</List>
        <Paragraph>
          Multiplicar qualquer expressão por <MathInline math="0" /> resulta em{" "}
          <MathInline math="0" />.
        </Paragraph>
        <MathBlock math="a\cdot 0 = 0\quad |\quad 5 \cdot 0 = 0" />

        <List index={3}>Comutatividade</List>
        <Paragraph>A ordem da multiplicação não altera o resultado.</Paragraph>
        <MathBlock math="a\cdot b = b \cdot a\quad |\quad 3 \cdot 4 = 4 \cdot 3" />

        <List index={4}>Associatividade</List>
        <Paragraph>
          A forma como a multiplicação é agrupada não altera o resultado.
        </Paragraph>
        <MathBlock math="(a \cdot b) \cdot c = a \cdot (b \cdot c)\quad |\quad (3 \cdot 4 ) \cdot 5 = 3 \cdot (4 \cdot 5)" />

        <List index={5}>Distributividade</List>
        <Paragraph>
          Essa propriedade significa que quando multiplicamos um número{" "}
          <MathInline math="a" /> pela soma de dois outros números{" "}
          <MathInline math="b" /> e <MathInline math="c" />, é o mesmo que
          multiplicar <MathInline math="a" /> individualmente por{" "}
          <MathInline math="b" /> e por <MathInline math="c" /> e, em seguida,
          somar ou subtrair os resultados.
        </Paragraph>
        <MathBlock math="a \cdot (b + c) = a \cdot b + a \cdot c" />

        <Title>Divisão</Title>
        <Paragraph>
          A divisão procura distribuir de forma igual uma quantidade numérica,
          sendo formada por quatro partes: o dividendo, o divisor, o quociente e
          o resto.
        </Paragraph>

        <Images
          width={280}
          height={120}
          src="/matematica_basica/multiplicacao_e_divisao/estrutura_divisao.png"
          alt="estrutura da divisão"
          fonteNome="Toda Matéria"
          fonteURL="https://www.todamateria.com.br/divisao/"
        />

        <Paragraph>
          A representação matemática da divisão pode ser como na imagem acima,
          ou como <MathInline math="37÷15" />, <MathInline math="37/15" />,{" "}
          <MathInline math="\frac{37}{15}" /> ou <MathInline math="37 : 15" />.
          Para efetuar uma divisão precisamos calcular quantas vezes o divisor
          cabe no dividendo. Por exemplo: <MathInline math="9÷3" /> quer saber
          quantas vezes o <MathInline math="3" /> cabe dentro de{" "}
          <MathInline math="9" />.
        </Paragraph>

        <Images
          width={280}
          height={280}
          src="/matematica_basica/multiplicacao_e_divisao/grade3x3.png"
          alt="grade 3x3"
          fonteNome="Wikimedia Commons"
          fonteURL="https://commons.wikimedia.org/wiki/File:Dissected_square-3x3.png"
        />

        <Paragraph>
          Se agruparmos o número <MathInline math="3" /> três vezes teremos{" "}
          <MathInline math="9" /> (
          <MathInline math="3 \cdot 3 = 9" />
          ). Assim, concluimos que <MathInline math="9÷3=3" /> porque{" "}
          <MathInline math="3 \cdot 3 = 9" />. Para um melhor exemplo, clique e
          assista a{" "}
          <InlineAnchor
            newTab
            marginoff
            redon
            href="https://youtu.be/0UGJRHq2PS4?t=839"
          >
            aula do Professor Ferreto
          </InlineAnchor>{" "}
          do minuto 14:00 até 29:27.
        </Paragraph>

        <Topic>Regra de sinais</Topic>
        <Paragraph>
          O quociente entre dois números de sinais iguais é positivo e o
          quociente entre dois números de sinais contrários é negativo:
        </Paragraph>

        <MathInline math="" />

        <br />
        <Paragraph>
          Agora para efetuar divisões com casas decimais, primeiro se precisa{" "}
          igualar as casas decimais. Exemplo: <MathInline math="7,2÷3" /> vira{" "}
          <MathInline math="7,2÷3,0" />. E então, o que se precisa fazer é
          ignorar as a vígula, tornando-se <MathInline math="72÷30" />. A partir
          daí é só resolver a divisão normalmente. Para um melhor exemplo,
          clique e assista a{" "}
          <InlineAnchor
            newTab
            marginoff
            redon
            href="https://youtu.be/0UGJRHq2PS4?t=1786"
          >
            aula do Professor Ferreto
          </InlineAnchor>{" "}
          do minuto 29:46 até 35:13.
        </Paragraph>

        <Topic>Propriedades</Topic>
        <List index={1}>Elemento nêutro</List>
        <Paragraph>
          Dividir por <MathInline math="1" /> não altera o resultado.
        </Paragraph>
        <MathBlock math="a ÷ 1 = a\quad |\quad 20 ÷ 1 = 20" />

        <List index={2}>Quociente de um número por ele mesmo</List>
        <Paragraph>
          Dividir um número por ele mesmo sempre resulta em{" "}
          <MathInline math="1" />.
        </Paragraph>
        <MathBlock math="a ÷ a = 1" />

        <List index={3}>Não comutatividade</List>
        <Paragraph>A ordem da operação altera o resultado.</Paragraph>
        <MathBlock math="10 ÷ 2 ≠ 2 ÷ 10" />

        <List index={4}>Zero como divisor</List>
        <Paragraph>
          Qualquer número divido por zero é indefinido, ou seja não existe (
          <MathInline math="∄" />) um quociente exato.
        </Paragraph>
        <MathBlock math="a ÷ 0 = ∄" />

        <br />
        <br />
        <br />
      </Main>
    </Wrapper>
  );
}
