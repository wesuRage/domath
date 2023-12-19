import Image from "next/image";
import { Container } from "./styles";
import InlineAnchor from "../Text/Anchor/InlineAnchor/InlineAnchor";
import Paragraph from "../Text/Paragraph/Paragraph";

interface ImagesProps {
  width: number;
  height: number;
  src: string;
  alt: string;
  fonteURL?: string;
  fonteNome?: string;
}

export default function Images({
  width,
  height,
  src,
  alt,
  fonteNome,
  fonteURL,
}: ImagesProps) {
  return (
    <Container>
      <div>
        <Image width={width} height={height} src={src} alt={alt} />
        {fonteNome && (
          <Paragraph>
            Fonte: <InlineAnchor href={fonteURL!}>{fonteNome}</InlineAnchor>
          </Paragraph>
        )}
      </div>
    </Container>
  );
}
