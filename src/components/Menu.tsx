"use client";

import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface Link {
  title: string;
}

const links: Link[] = [
  { title: "About" },
  { title: "Projects" },
  { title: "Resume" },
  { title: "Blog" },
  { title: "Contact" },
];

const Menu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {links.map((link, index) => (
          <NavigationMenuItem
            key={index}
            className={`text-md rounded px-4 hover:bg-secondary`}
          >
            {link.title}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Menu;
