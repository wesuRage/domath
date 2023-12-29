import { Container } from "./styles";

export default function MathInline({ math }: { math: string }) {
  return (
    <Container>
      <img
        src={`https://math.vercel.app/?color=red&bgcolor=black&inline=${encodeURIComponent(
          math
        )}.svg`}
      />
    </Container>
  );
}
