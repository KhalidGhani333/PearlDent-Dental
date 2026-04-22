export function Logo({ light = false }: { light?: boolean }) {
  const navy = light ? "#FFFFFF" : "#0D2137";
  return (
    <div className="flex items-center gap-2">
      <svg width="38" height="38" viewBox="0 0 40 40" fill="none" aria-hidden>
        <path
          d="M20 4c-5 0-7 3-10 3S5 5 5 12c0 6 3 10 4 16 1 5 2 8 5 8 2 0 2-4 3-8 1-3 2-3 3-3s2 0 3 3c1 4 1 8 3 8 3 0 4-3 5-8 1-6 4-10 4-16 0-7-2-5-5-5s-5-3-10-3z"
          fill="#0B7B83"
        />
        <circle cx="27" cy="14" r="3" fill="#FFFFFF" opacity="0.7" />
      </svg>
      <div className="leading-tight">
        <div className="font-serif text-2xl">
          <span className="text-teal">Pearl</span>
          <span style={{ color: navy }}>Dent</span>
        </div>
        <div className="text-[10px] italic text-muted-foreground -mt-1">
          care &amp; aesthetics
        </div>
      </div>
    </div>
  );
}
