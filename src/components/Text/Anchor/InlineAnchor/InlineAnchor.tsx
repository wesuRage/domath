import { Anc } from "./styles";

interface AnchorProps {
  href: string;
  children: React.ReactNode;
  marginoff?: boolean;
  redon?: boolean;
  newTab?: boolean;
}

export default function InlineAnchor({ href, children }: AnchorProps) {
  return (
    <>
      <Anc target="_blank" href={href} scroll={false}>
        {children}
      </Anc>
    </>
  );
}
