import React from "react";
import { Heading } from "./Typography/Heading";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-col items-center p-4 gap-2 bg-slate-800 text-white">
      <div className="relative w-24 h-24 rounded-full overflow-hidden">
        <Image
          src="https://i.pravatar.cc/300"
          fill
          alt="test"
          style={{ objectFit: "cover" }}
        />
      </div>
      <Heading text="Cody Vela" />
      <div className="flex">Icon Holder</div>
    </div>
  );
};

export default Header;
