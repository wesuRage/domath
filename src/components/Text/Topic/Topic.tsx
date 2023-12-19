"use client";

import { TitleTag } from "./styles";

export default function Topic({ children }: { children: React.ReactNode }) {
  return <TitleTag>{children}</TitleTag>;
}
