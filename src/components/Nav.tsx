import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex flex-row gap-2 mb-6 text-sm border-b-2 border-b-stone-800 pb-2">
      <Link href="/">Home</Link>
      <Link href="/work">Work</Link>
      <Link href="/blog">Blog</Link>
      <Link href="mailto:cody.vela@proton.me">Contact</Link>
    </div>
  );
};

export default Nav;
