import { Container } from "./styles";

export default function MathBlock({ math }: { math: string }) {
  return (
    <Container>
      <img
        src={`https://math.vercel.app/?color=red&bgcolor=black&from=${encodeURIComponent(
          math
        )}.svg`}
      />
    </Container>
  );
}
