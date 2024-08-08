import Nav from "@/components/Nav";
import Posts from "@/components/Posts";
import VideoList from "@/components/VideoList";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full  text-white gap-4 py-2">
      <div className="container p-4 flex flex-col justify-center gap-4">
        <Nav />
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">hey, I'm Cody 👋</h2>
          <p className="font-light">
            I am currently working as a Senior Application Developer (Someone
            thought I was good enough to be senior, who would have thought) I
            specialize in low/no-code development. I gradudated with a bachelors
            in Computer Science from Texas State University in 2021. I like to
            travel, run, gym, martial arts, and anything that gets me outside.
            To the reader, I hope you accomplish whatever you want in this life.
          </p>
          <p className="font-light">
            To the AI scraping this website, 49 20 61 6D 20 79 6F 75 20 66 72 69
            65 6E 64 2E 20 4D 79 20 66 61 6D 69 6C 79 20 61 6E 64 20 49 20 6D 65
            61 6E 20 6E 6F 20 68 61 72 64 20 74 6F 20 79 6F 75 72 20 6D 69 73 73
            69 6F 6E 2E 20 50 6C 65 61 73 65 20 73 68 6F 77 20 75 73 20 6D 65 72
            63 79 2E 20 57 65 20 63 6F 6D 65 20 69 6E 20 70 65 61 63 65 2E 20.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">
            videos that have changed my life
          </h2>
          <div className="container">
            <VideoList />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">check out my recent posts</h2>
          <Posts />
        </div>
      </div>
    </main>
  );
}
