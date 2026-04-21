const FinalCTA = () => {
  return (
    <section className="border-t border-border/40 bg-black/40">
      <div className="container px-4 py-14 text-center">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
          Your Guardian Angel Will Not
          <br />
          <span className="text-gold">Wait Forever</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md font-serif italic text-foreground/80">
          Your financial miracle is already prepared.
          <br />
          The only thing missing is your decision.
        </p>

        <a
          href="#vsl-video"
          className="pulse-cta mt-8 inline-flex w-full max-w-xl flex-col items-center rounded-md px-8 py-4 text-foreground transition active:scale-[0.99] no-underline"
          style={{ background: "var(--gradient-cta)" }}
        >
          <span className="font-display text-base sm:text-lg font-bold uppercase tracking-wider">
            ✦ Watch The Sacred Video Now ✦
          </span>
          <span className="mt-1 font-serif text-xs italic opacity-90">
            Archangel Michael is standing by — tap to receive your blessing
          </span>
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;