const Hero = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="divine-light pointer-events-none absolute inset-x-0 top-0 h-[520px]" />
      <div className="container relative z-10 flex flex-col items-center px-4 pt-10 pb-6 text-center">
        <p className="font-display text-[10px] sm:text-xs uppercase tracking-[0.35em] text-primary/80">
          ✦ Heaven Sent You Here — Do Not Close This Page ✦
        </p>

        <h1 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground">
          God Sent You Here Today
          <br />
          For A Reason —
          <br />
          <span className="text-gold">Archangel Michael Is</span>
          <br />
          <span className="text-gold underline decoration-primary/60 underline-offset-[10px]">
            Finally Ready To Act
          </span>
        </h1>

        <p className="mt-6 font-serif italic text-sm sm:text-base md:text-lg text-primary/80 tracking-wide">
          The Sacred Chant of Saint Padre Pio · Manifest Your Financial Miracle in 24 Hours
        </p>

        <div
          id="vsl-video"
          className="relative mt-10 w-full max-w-[320px] sm:max-w-[380px] overflow-hidden rounded-2xl border border-border/40 shadow-2xl"
        >
          <iframe
            src="https://play.tynk.ai/p/2227262e-003e-4431-a92f-0b447a74a449"
            title="The Sacred Chant of Saint Padre Pio"
            className="block aspect-[9/16] w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
