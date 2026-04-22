type Props = { color?: string; flip?: boolean; className?: string };

export function Wave({ color = "#FFFFFF", flip = false, className = "" }: Props) {
  return (
    <div
      className={`pointer-events-none w-full leading-[0] ${className}`}
      style={{ transform: flip ? "rotate(180deg)" : undefined }}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="block h-[60px] w-full md:h-[90px]"
      >
        <path
          d="M0,40 C240,90 480,0 720,40 C960,80 1200,10 1440,50 L1440,90 L0,90 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
