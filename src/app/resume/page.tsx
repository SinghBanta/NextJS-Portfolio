import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>

      <div className="flex items-center gap-4">
      <Heading className="font-black">Education</Heading>
      <button className="border-2 hover:bg-slate-700 rounded-full pl-3 pr-3 pt-1 pb-1 font-medium bg-slate-800 text-white text-sm transition-all duration-500 ease-in-out">
        <Link href="/BantaSingh_Resume.pdf" target="_blank">Resume &darr;</Link>{" "}
      </button>
      </div>

      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack developer that loves{" "}
        <Highlight>building products</Highlight> and web apps that can impact
        millions of lives.
      </Paragraph>

      <WorkHistory />
    </Container>
  );
}
