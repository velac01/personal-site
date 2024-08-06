import Link from "next/link";

interface Video {
  name: string;
  url: string;
  author: string;
}

const videos: Video[] = [
  {
    name: "How to not be a Noob",
    url: "https://www.youtube.com/watch?v=-v8pD0d5Bmk&ab_channel=Escapingthemeta",
    author: "Geohot",
  },
  {
    name: "Build Strength From Stuggle",
    url: "https://www.youtube.com/watch?v=-v8pD0d5Bmk&ab_channel=Escapingthemeta",
    author: "Brad Traversy",
  },
  {
    name: "Just Get Off the Interstate",
    url: "https://www.youtube.com/watch?v=wz2hKDZBTks&ab_channel=DryCreekWranglerSchool",
    author: "Dry Creek Wrangler School",
  },
  {
    name: "Buckys C++ Programming Tutorials - 1 - Installing CodeBlocks",
    url: "https://www.youtube.com/watch?v=tvC1WCdV1XU&list=PLAE85DE8440AA6B83&index=1&ab_channel=thenewboston",
    author: "thenewboston",
  },
  {
    name: "Treat Yourself Like Someone You Are Responsible For Helping",
    url: "https://www.youtube.com/watch?v=ppuq661Jl3k&ab_channel=JordanPetersonClips",
    author: "Jordan Peterson",
  },
  {
    name: "Joe Rogan Experience #1080 - David Goggins",
    url: "https://www.youtube.com/watch?v=5tSTk1083VY&ab_channel=PowerfulJRE",
    author: "Joe Rogan",
  },
  {
    name: "React JS Crash Course (2019)",
    url: "https://www.youtube.com/watch?v=sBws8MSXN7A&ab_channel=TraversyMedia",
    author: "Traversy Media",
  },
];

const VideoList = () => {
  return (
    <ul className="list-disc m-2">
      {videos.map((video, index) => {
        return (
          <li key={index}>
            <Link
              href={video.url}
              className="text-yellow-600 font-semibold underline"
            >
              {video.name}
            </Link>{" "}
            By {video.author}
          </li>
        );
      })}
    </ul>
  );
};

export default VideoList;
