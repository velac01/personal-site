import Header from "@/components/Header";
import Menu from "@/components/Menu";
import { Heading } from "@/components/Typography/Heading";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-stone-900 text-white gap-4">
      <div className="container p-4">
        <div className="flex flex-row gap-2 mb-8 text-sm border-b-2 border-b-stone-800 pb-2">
          <p>Home</p>
          <p>Work</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">hey, I'm Cody 👋</h2>
          <p className="font-light text-pretty text-md">
            I am currently working as a Senior Application Developer at
            SynergyBIS. I specialize in low/no-code development. I gradudated
            with a bachelors in Computer Science from Texas State University in
            2021. I like to travel, run, gym, martial arts, and anything that
            gets me outside.
          </p>
        </div>
      </div>
    </main>
  );
}
