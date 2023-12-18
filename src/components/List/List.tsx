import { Index, LI } from "./styles";

export default function List({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  return (
    <LI>
      <Index>{index}</Index> {children}
    </LI>
  );
}
