import { MockChip, PhoneFrame } from "./DeviceFrames";

const sessions = [
  { title: "Morning Calm", meta: "8 min · Meditation" },
  { title: "Deep Sleep Story", meta: "22 min · Sleep" },
];

export default function MyBUDVisual() {
  return (
    <PhoneFrame>
      <div className="flex h-[440px] flex-col gap-3 px-4 pb-4 pt-8">
        <div>
          <p className="text-sm font-bold text-[color:var(--color-fg)]">Hi Aanya 👋</p>
          <p className="text-[11px] text-[color:var(--color-fg-muted)]">How are you feeling today?</p>
        </div>

        <div className="flex justify-between gap-2">
          {["😔", "😐", "🙂", "😄"].map((emoji, i) => (
            <span
              key={i}
              className="flex-1 rounded-lg border border-white/10 bg-white/[0.03] py-2 text-center text-base"
            >
              {emoji}
            </span>
          ))}
        </div>

        <div className="mt-1">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-[color:var(--color-fg-faint)]">
            Recommended for you
          </p>
          <div className="flex flex-col gap-2">
            {sessions.map((s) => (
              <div key={s.title} className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
                <p className="text-[11px] font-semibold text-[color:var(--color-fg)]">{s.title}</p>
                <p className="text-[9px] text-[color:var(--color-fg-muted)]">{s.meta}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto flex gap-2">
          <MockChip active>Home</MockChip>
          <MockChip>Explore</MockChip>
          <MockChip>Journal</MockChip>
        </div>
      </div>
    </PhoneFrame>
  );
}
