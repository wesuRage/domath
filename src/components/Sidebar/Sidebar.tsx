"use client";

import { useState } from "react";
import { Container } from "./styles";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Nav from "./Nav/Nav";
import Header from "./Header/Header";
import OpenClose from "./OpenClose/OpenClose";

export default function Sidebar() {
  const [on, setOn] = useState(true);

  const showSidebar = () => setOn(!on);

  return (
    <Container>
      {on ? (
        <>
          <div>
            <Header />
            <Nav />
          </div>
          <OpenClose onclick={showSidebar}>
            <FaAngleLeft />
          </OpenClose>
        </>
      ) : (
        <OpenClose onclick={showSidebar}>
          <FaAngleRight />
        </OpenClose>
      )}
    </Container>
  );
}
