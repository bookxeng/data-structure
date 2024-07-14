import { Inconsolata } from "next/font/google";
import Tree from "./TreeFunc";

const inconsolata = Inconsolata({
  weight : '400',
  subsets : ['latin'],
})

export default function Home() {
  return (
    <main className={inconsolata.className}>
      <Tree/>
    </main>
  );
}
