interface HeadingProps {
  text: string;
}

export function Heading({ text }: HeadingProps) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {text}
    </h2>
  );
}
