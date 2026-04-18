type Comment = {
  name: string;
  initials: string;
  time: string;
  text: string;
  likes: number;
  replies?: Comment[];
};

const comments: Comment[] = [
  {
    name: "Madison Blake",
    initials: "MB",
    time: "2h",
    likes: 23,
    text: "After listening to the chants, my life took a turn I never thought possible. My debts were cleared in unexpected ways, and today I live with a sense of abundance I could never have imagined. Saint Michael the Archangel has been my protector through every battle.",
  },
  {
    name: "Olivia Turner",
    initials: "OT",
    time: "35 min",
    likes: 17,
    text: "I didn't know how to overcome the financial struggles that were suffocating me, but once I reconnected with my angel, I felt an immense peace, and soon the solutions began to appear. I am certain that Saint Michael guided me onto this path.",
  },
  {
    name: "Matthew Collins",
    initials: "MC",
    time: "1 min",
    likes: 11,
    text: "I was at rock bottom, but these chants changed everything. In less than a month, I was able to pay off my debts, reorganize my life, and at last, I felt a true sense of purpose.",
    replies: [
      {
        name: "Grace Mitchell",
        initials: "GM",
        time: "6 min",
        likes: 32,
        text: "I woke up from a dream with Saint Michael the Archangel and, on that very same day, received news of an incredible opportunity at work. Everything has flowed so naturally since — I can only be grateful.",
      },
    ],
  },
  {
    name: "Joshua Peterson",
    initials: "JP",
    time: "5 min",
    likes: 6,
    text: "The most surprising thing was how quickly everything changed. I reconnected with my life's purpose and achieved goals that once felt impossible. My gratitude is beyond words.",
  },
  {
    name: "Ryan Cooper",
    initials: "RC",
    time: "1h",
    likes: 16,
    text: "I've always worked hard but never seemed to move forward. After listening to the chants, opportunities started to appear and, for the first time, I was able to save money and fulfill long-held dreams.",
    replies: [
      {
        name: "Sophia James",
        initials: "SJ",
        time: "11",
        likes: 12,
        text: "I was super skeptical too, but it's real. Give it a try for a few days and see. I was amazed at how quickly I felt peace, clarity, and a sense of prosperity — as if the song of angels was guiding my path.",
      },
    ],
  },
  {
    name: "Andrew Scott",
    initials: "AS",
    time: "2h",
    likes: 76,
    text: "I hesitated at first, but the feeling of stagnation was becoming overwhelming. It was this angelic chant experience that finally brought me deep peace, clarity, and prosperity. I cannot recommend it enough.",
  },
  {
    name: "Chloe Anderson",
    initials: "CA",
    time: "23 min",
    likes: 28,
    text: "Congratulations on sharing this message! With so many empty promises online, it's rare to find something that truly brings peace, clarity, and a sense of prosperity. This is the real thing.",
  },
  {
    name: "Lily Brooks",
    initials: "LB",
    time: "2h",
    likes: 67,
    text: "I've been listening consistently for a few weeks now and the shift has been incredible. I feel more aligned, opportunities started appearing, and a deep sense of prosperity filled my life — it truly feels like the song of angels is guiding my path.",
  },
  {
    name: "Jackson Reed",
    initials: "JR",
    time: "2h",
    likes: 47,
    text: "I'm so glad I watched the video until the end! I thought it might be just another internet promise, but wow — it's real. Starting the angelic prosperity chant tomorrow and I cannot wait.",
  },
];

const CommentItem = ({ c, nested = false }: { c: Comment; nested?: boolean }) => (
  <div className={`flex gap-3 ${nested ? "mt-4 ml-10" : ""}`}>
    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-primary/40 bg-primary/10 font-display text-[11px] font-semibold text-primary">
      {c.initials}
    </div>
    <div className="flex-1">
      <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary">
        {c.name}
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-foreground/85">{c.text}</p>
      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider text-muted-foreground">
          <button className="hover:text-primary">Like</button>
          <button className="hover:text-primary">Reply</button>
          <span>{c.time}</span>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/5 px-2 py-0.5 text-[11px] text-primary">
          <span>♥</span>
          {c.likes}
        </span>
      </div>
      {c.replies?.map((r, i) => (
        <CommentItem key={i} c={r} nested />
      ))}
    </div>
  </div>
);

const Comments = () => {
  return (
    <section className="container max-w-3xl px-4 pb-12">
      <div className="mb-6 flex items-center gap-3">
        <h2 className="font-display text-xl font-semibold text-primary">
          36,158 <span className="text-foreground/90">Comments</span>
        </h2>
        <span className="inline-flex items-center gap-1.5 rounded-sm bg-sacred-red px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-foreground blink-dot" />
          Live
        </span>
      </div>
      <div className="h-px w-full bg-border/60" />
      <div className="mt-6 space-y-7">
        {comments.map((c, i) => (
          <CommentItem key={i} c={c} />
        ))}
      </div>
    </section>
  );
};

export default Comments;
