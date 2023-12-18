import { Anc } from "./styles";

export default function Anchor({
  href,
  children,
  MarginOff,
  RedOn,
  newTab,
}: {
  href: string;
  children: React.ReactNode;
  MarginOff?: boolean;
  RedOn?: boolean;
  newTab?: boolean;
}) {
  return (
    <>
      <Anc
        target={newTab ? "_blank" : "_self"}
        RedOn={RedOn}
        MarginOff={MarginOff}
        href={href}
      >
        {children}
      </Anc>
    </>
  );
}
