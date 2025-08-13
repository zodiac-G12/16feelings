import { StartDiagButton } from "@/components/parts/buttons";

export const Top = () => {
  return (
    <div class="flex flex-col items-center justify-center px-20 gap-8 h-[calc(100vh-64px)]">
      <h1 class="text-5xl font-bold break-keep">
        あなたの
        <wbr />
        念系統を診断
      </h1>
      <p class="text-xl text-purple-100 break-keep">
        MBTIタイプから、 Hunter x Hunterの念系統を判定します
      </p>
      <StartDiagButton />
    </div>
  );
};
