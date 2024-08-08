"use client";

import Nav from "@/components/Nav";
import { Heading } from "@/components/Typography/Heading";
import React from "react";
import Txst from "../../../public/static/txst.svg";
import Image from "next/image";

const WorkPage = () => {
  return (
    <main className="flex flex-col min-h-screen w-full  text-white gap-4 py-2">
      <div className="container p-4 flex flex-col justify-center gap-4">
        <Nav />
        <div className="flex flex-col gap-2">
          <div className="mb-2">
            <h2 className="text-xl font-semibold">My Work</h2>
            <p>Here is some of education and employment background</p>
          </div>
          {/* Education */}
          <div className="flex flex-col">
            <Heading text="Education" />
            <div className="flex flex-row justify-between py-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">
                  Texas State University
                </h3>
                <h3 className="text-md font-light italic">
                  Bachelors of Science in Computer Science
                </h3>
              </div>
              <div className="flex flex-col gap-2 text-right">
                <h3 className="text-md font-light italic">
                  Aug 2017 - May 2021
                </h3>
                <h3 className="text-md font-light italic">San Marcos, TX</h3>
              </div>
            </div>
          </div>
          {/* Work */}
          <div className="flex flex-col">
            <Heading text="Work" />
            {/* Work Area */}
            <div className="flex flex-row justify-between py-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">
                  Senior Application Developer
                </h3>
                <h3 className="text-md font-light italic">SynergyBIS</h3>
              </div>

              <div className="flex flex-col gap-2 text-right">
                <h3 className="text-md font-light italic">
                  July 2024 - Present
                </h3>
                <h3 className="text-md font-light italic">
                  Houston, TX (Remote)
                </h3>
              </div>
            </div>
            <div className="container">
              <ul className="list-disc text-light">
                <li>This is a thing I did</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkPage;
