export default function Loading() {
  return (
    <div className="fixed inset-0 z-100 bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-tomato/30 border-t-tomato rounded-full animate-spin" />
        <p className="text-foreground-muted text-sm font-mono tracking-widest uppercase">
          Initializing...
        </p>
      </div>
    </div>
  );
}
