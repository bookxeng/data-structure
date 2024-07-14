import { Inconsolata } from "next/font/google";
import Linked from "./LinkedListFunc";

const inconsolata = Inconsolata({
  weight : '400',
  subsets : ['latin'],
})

export default function Home() {
  return (
    <main className={inconsolata.className}>
      <Linked/>
    </main>
  );
}
