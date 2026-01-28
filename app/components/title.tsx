interface TitleProps {
  text?: string;
}
export default function Title({ text }: TitleProps) {
  return (
    <>
      <h2 className="dark:text-[#686868] text-[var(--blue)] font-[500] text-[16px]">{text}</h2>
    </>
  );
}
