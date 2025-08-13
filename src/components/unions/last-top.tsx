import { CheckIcon } from "@/components/parts/icons";

export const LastTop = () => {
  return (
    <div class="flex justify-center">
      <div class="flex items-center justify-center px-5 py-2 rounded-full lg:text-base lg:px-6 lg:py-3 bg-white/10 gap-1">
        <CheckIcon />
        <span>診断完了</span>
      </div>
    </div>
  );
};
