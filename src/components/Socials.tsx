import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

interface SocialLink {
  icon: React.ReactNode;
  url: string;
}

const socialLinks: SocialLink[] = [
  { icon: <FaGithub />, url: "https://www.instagram.com/" },
  { icon: <FaTwitter />, url: "https://www.twitter.com/" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/" },
];

const SocialLinks = () => {
  return (
    <div className="flex gap-4 text-white py-2">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
