import { Inconsolata } from "next/font/google";
import Tree from "./TreeFunc";
import Navbar from "./navbar";

const inconsolata = Inconsolata({
  weight : '400',
  subsets : ['latin'],
})

export default function Home() {
  return (
    <main className={inconsolata.className}>
      <Navbar/>
      <Tree/>
    </main>
  );
}
