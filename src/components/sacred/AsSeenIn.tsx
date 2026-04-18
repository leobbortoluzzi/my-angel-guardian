const logos = ["The New York Times", "CBS", "abc", "FOX", "CNN"];

const AsSeenIn = () => {
  return (
    <section className="container px-4 py-8">
      <p className="text-center font-display text-[10px] uppercase tracking-[0.35em] text-primary/70">
        ✦ As Seen In ✦
      </p>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
        {logos.map((l, i) => (
          <span
            key={i}
            className={`text-muted-foreground ${
              l === "The New York Times"
                ? "font-serif italic text-lg sm:text-xl"
                : "font-display text-base sm:text-lg font-semibold tracking-wider"
            }`}
          >
            {l}
          </span>
        ))}
      </div>
      <div className="mx-auto mt-10 flex max-w-3xl items-center gap-4">
        <div className="h-px flex-1 bg-border/60" />
        <span className="text-primary/70">✦</span>
        <div className="h-px flex-1 bg-border/60" />
      </div>
    </section>
  );
};

export default AsSeenIn;
