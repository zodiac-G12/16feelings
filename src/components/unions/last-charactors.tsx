import { For } from "solid-js";
import { NEN_CHARACTORS_MAP, Nen } from "@/constants";
import { PeoplesIcon, HumanWithCircleIcon } from "@/components/parts/icons";

export const LastCharactors = ({ nenName }: { nenName: Nen }) => {
  return (
    <div class="flex justify-center">
      <div class="flex flex-col w-5/6 p-6 lg:w-1/3 gap-4 lg:gap-14 rounded-2xl bg-black/30">
        <div class="flex items-center text-lg lg:text-2xl gap-2">
          <PeoplesIcon />
          <span>同じ系統のキャラクター</span>
        </div>
        <div class="flex justify-center px-4 gap-2 lg:px-20 lg:gap-20">
          <For each={NEN_CHARACTORS_MAP[nenName]}>
            {(charactorName) => (
              <div class="flex flex-col items-center text-sm text-center gap-2 text-white/90">
                <HumanWithCircleIcon />
                <span>{charactorName}</span>
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  );
};
