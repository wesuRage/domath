import { Anc } from "./styles";

interface AnchorProps {
  href: string;
  children: React.ReactNode;
  marginoff?: boolean;
  redon?: boolean;
  newTab?: boolean;
}

export default function SidebarAnchor({ href, children }: AnchorProps) {
  return (
    <Anc href={href} scroll={false}>
      {children}
    </Anc>
  );
}
