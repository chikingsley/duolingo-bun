import { StickyWrapper } from "@/components/sticky-wrapper";

export function HomePage() {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper color="red" children={"Home"} />
    </div>
  );
}

export default HomePage;
