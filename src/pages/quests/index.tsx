import { StickyWrapper } from "@/components/sticky-wrapper";

export function QuestsPage() {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper color="red" children={"Quests"} />
    </div>
  );
}

export default QuestsPage;
