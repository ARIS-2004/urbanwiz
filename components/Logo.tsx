import Image from "next/image";
import Link from "next/link";

export default function Logo({
  inverted = false,
  size = "sm",
}: {
  inverted?: boolean;
  size?: "sm" | "lg";
}) {
  const height = size === "lg" ? 44 : 32;
  return (
    <Link
      href="/"
      aria-label="Urbanwiz home"
      className="inline-flex items-center select-none"
    >
      <Image
        src="/logo.png"
        alt="Urbanwiz"
        width={height * 4}
        height={height}
        priority
        className={`h-14 sm:h-16 w-auto ${
          size === "lg" ? "!h-20 sm:!h-24" : ""
        } ${inverted ? "brightness-0 invert" : ""}`}
      />
    </Link>
  );
}
