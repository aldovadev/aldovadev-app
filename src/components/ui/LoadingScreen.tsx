export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center overflow-hidden">
      {/* Sweeping progress bar */}
      <div className="absolute top-0 left-0 w-full h-[2px] overflow-hidden">
        <div className="loading-progress-bar" />
      </div>

      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(var(--foreground) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Glow orb behind the shape */}
      <div className="absolute w-48 h-48 rounded-full bg-tomato/5 dark:bg-tomato/10 blur-3xl loading-glow" />

      {/* Center content */}
      <div className="relative flex flex-col items-center gap-10">
        {/* Geometric orbit loader */}
        <div className="relative w-24 h-24">
          {/* Outer morphing ring */}
          <div className="absolute inset-0 border-2 border-tomato/50 loading-morph" />

          {/* Inner counter-morphing ring */}
          <div className="absolute inset-3 border border-tomato/20 loading-morph-reverse" />

          {/* Center pulsing dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-tomato loading-pulse-dot" />
          </div>

          {/* Orbiting particles */}
          <div className="absolute inset-0 loading-orbit loading-orbit-1">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-tomato/70" />
          </div>
          <div className="absolute inset-0 loading-orbit loading-orbit-2">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-tomato/50" />
          </div>
          <div className="absolute inset-0 loading-orbit loading-orbit-3">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-tomato/60" />
          </div>
        </div>

        {/* Code-style text */}
        <div className="flex items-center gap-0.5 font-mono text-sm tracking-wider loading-fade-up">
          <span className="text-tomato font-semibold">&lt;</span>
          <span className="text-foreground-muted">loading</span>
          <span className="text-tomato font-semibold">&nbsp;/&gt;</span>
          <span className="loading-cursor" />
        </div>

        {/* Sequential dots */}
        <div className="flex gap-2 loading-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="loading-dot" style={{ animationDelay: "0s" }} />
          <div className="loading-dot" style={{ animationDelay: "0.15s" }} />
          <div className="loading-dot" style={{ animationDelay: "0.3s" }} />
        </div>
      </div>
    </div>
  );
}
