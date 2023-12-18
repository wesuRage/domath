export default function MathInline({ math }: { math: string }) {
  return (
    <img
      src={`https://math.vercel.app/?color=red&bgcolor=black&inline=${encodeURIComponent(
        math
      )}.svg`}
    />
  );
}
