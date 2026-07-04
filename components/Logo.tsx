type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

const STROKE = {
  light: "#0A0F1A",
  dark: "#00F0FF",
} as const;

export default function Logo({ variant = "light", className }: LogoProps) {
  const stroke = STROKE[variant];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="50" cy="50" r="38" stroke={stroke} strokeWidth="4" />
      <path
        d="M14 62 C 28 54, 38 70, 50 62 S 72 54, 86 62"
        stroke={stroke}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
