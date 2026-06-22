import Link from "next/link";

export default function Logo({
  inverted = false,
  size = "sm",
}: {
  inverted?: boolean;
  size?: "sm" | "lg";
}) {
  const fontSize =
    size === "lg"
      ? "text-[28px] sm:text-[32px]"
      : "text-[20px] sm:text-[22px]";
  return (
    <Link
      href="/"
      aria-label="Urbanwiz home"
      className="inline-flex items-baseline font-display font-extrabold tracking-[-0.02em] leading-none select-none"
    >
      <span className={`${fontSize} ${inverted ? "text-ivory" : "text-navy"}`}>
        Urban
      </span>
      <span className={`${fontSize} text-orange`}>wiz</span>
    </Link>
  );
}
