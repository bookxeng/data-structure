import Head from "@/components/head"
import List from "@/components/list"
import { Inconsolata } from "next/font/google";

const inconsolata = Inconsolata({
  weight : '400',
  subsets : ['latin'],
})

export default function Home() {
  return (
    <main className={inconsolata.className}>
        <Head/>
        <List/>
    </main>
  );
}
