interface HeadingProps {
  text: string;
}

export function Heading({ text }: HeadingProps) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary">
      {text}
    </h3>
  );
}
