import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";


export default function Home() {
  return (
    <main>
      <Header />
      <CardPizza />
    </main>
  );
}
