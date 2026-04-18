import { Play, RotateCcw } from "lucide-react";

const VideoBlock = () => {
  return (
    <section className="container px-4 pb-10">
      <div
        className="relative mx-auto aspect-video max-w-3xl overflow-hidden rounded-sm border-2 border-primary/40 bg-black"
        style={{ boxShadow: "var(--shadow-divine)" }}
      >
        {/* Side dark panels mimic letterboxed vertical video */}
        <div className="absolute inset-y-0 left-0 w-1/4 bg-black" />
        <div className="absolute inset-y-0 right-0 w-1/4 bg-black" />

        {/* Center red panel */}
        <div
          className="absolute inset-y-0 left-1/4 right-1/4 flex flex-col items-center justify-center px-6 text-center"
          style={{ background: "hsl(var(--sacred-red))" }}
        >
          <p className="max-w-[16rem] font-serif text-base sm:text-lg text-foreground/95">
            You have already started watching this video.
          </p>

          <button className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground/95 transition hover:text-primary-glow">
            <span className="grid h-7 w-7 place-items-center rounded-full border border-foreground/80">
              <Play className="h-3.5 w-3.5 fill-current" />
            </span>
            Continue watching?
          </button>

          <button className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-foreground/95 transition hover:text-primary-glow">
            <span className="grid h-7 w-7 place-items-center rounded-full border border-foreground/80">
              <RotateCcw className="h-3.5 w-3.5" />
            </span>
            Watch from the beginning?
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoBlock;
