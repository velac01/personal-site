import React from "react";
import { Heading } from "./Typography/Heading";
import Image from "next/image";
import SocialLinks from "./Socials";

const Header = () => {
  return (
    <div className="flex flex-col items-center p-4 gap-2 bg-slate-800 text-white">
      <div className="relative w-36 h-36 rounded-full overflow-hidden">
        <Image
          src="https://i.pravatar.cc/300"
          fill
          alt="test"
          style={{ objectFit: "cover" }}
        />
      </div>
      <Heading text="Cody Vela" />
      <SocialLinks />
    </div>
  );
};

export default Header;
