interface WaveDividerProps {
  color: string;
  position: "top" | "bottom";
  className?: string;
}

export default function WaveDivider({ color, position, className = "" }: WaveDividerProps) {
  if (position === "top") {
    return (
      <div className={`w-full overflow-hidden ${className}`} style={{ marginBottom: "-1px" }}>
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
          style={{ height: "60px" }}
        >
          <path
            d="M0 80L48 72C96 64 192 48 288 40C384 32 480 32 576 37.3C672 42.7 768 53.3 864 56C960 58.7 1056 53.3 1152 45.3C1248 37.3 1344 26.7 1392 21.3L1440 16L1440 0L1392 0C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0L0 0L0 80Z"
            fill={color}
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`w-full overflow-hidden ${className}`} style={{ marginBottom: "-1px" }}>
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full block"
        preserveAspectRatio="none"
        style={{ height: "60px" }}
      >
        <path
          d="M0 0L48 8C96 16 192 32 288 40C384 48 480 48 576 42.7C672 37.3 768 26.7 864 24C960 21.3 1056 26.7 1152 34.7C1248 42.7 1344 53.3 1392 58.7L1440 64L1440 80L1392 80C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80L0 80L0 0Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
