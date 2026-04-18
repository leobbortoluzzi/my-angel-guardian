const items = [
  "Listen And Manifest Money Today",
  "Archangel Michael Is Ready To Act",
  "The Sacred Chant Of Padre Pio",
  "Your Financial Miracle In 24 Hours",
];

const Marquee = () => {
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className="w-full overflow-hidden border-b border-border/40 bg-black/40 py-2">
      <div className="marquee flex whitespace-nowrap">
        {loop.map((t, i) => (
          <span
            key={i}
            className="mx-8 inline-flex items-center gap-3 font-display text-[10px] sm:text-xs uppercase tracking-[0.25em] text-primary/80"
          >
            {t}
            <span className="text-primary/60">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
