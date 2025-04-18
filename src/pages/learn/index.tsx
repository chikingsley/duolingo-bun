import { StickyWrapper } from "@/components/sticky-wrapper";

export function LearnPage() {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper color="red" children={"Learn"} />
    </div>
  );
}

export default LearnPage;
