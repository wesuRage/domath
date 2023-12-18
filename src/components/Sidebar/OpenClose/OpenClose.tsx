import { Button } from "./styles";

export default function OpenClose({
  onclick,
  children,
}: {
  children: React.ReactNode;
  onclick: () => void;
}) {
  return <Button onClick={onclick}>{children}</Button>;
}
