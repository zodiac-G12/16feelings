import { TopIcon } from "@/components/parts/icons";

export const Header = () => {
  return (
    <div class="lg:flex lg:justify-between lg:items-center py-4 px-4 lg:px-20 bg-[#fff6ef]/[0.3] lg:bg-[#fff6ef]/[0]">
      <div class="flex items-center gap-3">
        <TopIcon />
        <div class="text-2xl font-bold">MBTI × Hunter念診断</div>
      </div>
      <div class="lg:flex lg:gap-6 invisible w-0 h-0 lg:text-base lg:visible lg:w-auto lg:h-auto">
        <div>診断</div>
        <div>念系統について</div>
        <div>結果一覧</div>
      </div>
    </div>
  );
};
