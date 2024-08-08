interface HeadingProps {
  text: string;
}

export function Heading({ text }: HeadingProps) {
  return (
    <h2 className="scroll-m-20 border-b border-b-stone-700 pb-2 text-xl font-semibold tracking-tight first:mt-0">
      {text}
    </h2>
  );
}
