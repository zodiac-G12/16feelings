import { StartIcon } from "@/components/parts/icons";

export const StartDiagButton = () => {
  return (
    <div>
      <a
        href="#NenBlock"
        class="rounded-lg border-gray-200 bg-amber-500 px-7 py-4 text-gray-900 flex items-center gap-2"
      >
        <StartIcon />
        <span>診断を始める</span>
      </a>
    </div>
  );
};
