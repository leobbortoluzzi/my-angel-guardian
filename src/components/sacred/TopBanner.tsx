const TopBanner = () => {
  return (
    <div
      className="w-full py-2 text-center text-xs sm:text-sm font-semibold tracking-wider uppercase"
      style={{ background: "var(--gradient-banner)", color: "hsl(40 30% 95%)" }}
    >
      <span className="inline-flex items-center gap-2">
        <span aria-hidden>⚠</span>
        Final Day — This Is Your Last Chance To Watch Before It's Gone Forever
        <span aria-hidden>⚠</span>
      </span>
    </div>
  );
};

export default TopBanner;
