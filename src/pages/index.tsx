import Image from "next/image";
import { Inter } from "next/font/google";
import Nav from "@/components/nav";
import SecondaryNav from "@/components/nav/SecondaryNav";
import Category from "@/components/category";
import Hero from "@/components/hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Nav />
      <SecondaryNav />
      <Category />
      <Hero />
    </div>
  );
}
