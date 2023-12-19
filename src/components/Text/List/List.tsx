import { Index, LI } from "./styles";

interface ListProps {
  children: React.ReactNode;
  index: number;
}

export default function List({ children, index }: ListProps) {
  return (
    <LI>
      <Index>{index}</Index> {children}
    </LI>
  );
}
