import { StickyWrapper } from "@/components/sticky-wrapper";

export function LeaderboardPage() {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper color="red" children={"Leaderboard"} />
    </div>
  );
}

export default LeaderboardPage;
