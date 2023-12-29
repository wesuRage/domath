"use client";

import MainLoading from "@/components/MainLoading/MainLoading";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Wrapper } from "@/components/Wrapper/Wrapper";

export default function Loading() {
  return (
    <Wrapper>
      <Sidebar />
      <MainLoading />
    </Wrapper>
  );
}
