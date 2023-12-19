import { Button } from "./styles";

interface OpenCloseProps {
  children: React.ReactNode;
  onclick: () => void;
}

export default function OpenClose({ onclick, children }: OpenCloseProps) {
  return <Button onClick={onclick}>{children}</Button>;
}
