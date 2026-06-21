import Link from "next/link";
import Image from "next/image";

export default function Logo({
  inverted = false,
  size = "sm",
}: {
  inverted?: boolean;
  size?: "sm" | "lg";
}) {
  const heightClass = size === "lg" ? "h-10" : "h-7";
  return (
    <Link
      href="/"
      aria-label="UrbanWizz home"
      className="inline-block"
    >
      <Image
        src="/logo.png"
        alt="UrbanWizz"
        width={756}
        height={186}
        priority
        className={`${heightClass} w-auto ${inverted ? "brightness-0 invert" : ""}`}
      />
    </Link>
  );
}
