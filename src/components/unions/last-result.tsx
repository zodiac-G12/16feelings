import { Accessor, Show } from "solid-js";
import { NEN_EXPLANATIONS_MAP, Nen, NenEng } from "@/constants";
import { getMbtiName } from "@/logics";
import {
  StrengthIcon,
  PaperIcon,
  EyeIcon,
  PenIcon,
  BrainIcon,
  HeartIcon,
} from "@/components/parts/icons";

export const LastResult = ({
  nenResult,
  mbti,
}: {
  nenResult: {
    nenName: Nen;
    nenEngName: NenEng;
    precisionRate: `${number}%`;
  };
  mbti: Accessor<string>;
}) => {
  return (
    <div class="flex justify-center">
      <div class="flex flex-col items-center w-1/3 px-8 pt-8 pb-16 border gap-6 border-purple-400/20 rounded-2xl bg-white/5">
        <div class="flex justify-center items-center shadow-[0px_25px_50px_0px_rgba(255,255,255,0.10)] rounded-full w-32 h-32 border-0 border-gray-200 bg-gradient-to-r from-[#6b46c1] to-[#6b21a8] bg-[linear-gradient(0deg,#6b46c1_0%,#6b21a8_100%)]">
          <Show when={nenResult.nenName === "強化系"}>
            <StrengthIcon size="large" color="white" />
          </Show>
          <Show when={nenResult.nenName === "放出系"}>
            <PaperIcon size="large" color="white" />
          </Show>
          <Show when={nenResult.nenName === "変化系"}>
            <EyeIcon size="large" color="white" />
          </Show>
          <Show when={nenResult.nenName === "具現化系"}>
            <PenIcon size="large" color="white" />
          </Show>
          <Show when={nenResult.nenName === "操作系"}>
            <BrainIcon size="large" color="white" />
          </Show>
          <Show when={nenResult.nenName === "特質系"}>
            <HeartIcon size="large" color="white" />
          </Show>
        </div>
        <div class="flex flex-col items-center justify-center gap-2">
          <h1 class="text-5xl font-bold">{nenResult.nenName}</h1>
          <h2 class="text-xl">{nenResult.nenEngName}</h2>
        </div>
        <div class="text-lg break-all rounded-2xl bg-white/10 p-7">
          {NEN_EXPLANATIONS_MAP[nenResult.nenName]}
        </div>
        <div class="flex gap-4">
          <div class="rounded-xl bg-[#6b46c1]/20 py-2 px-4">
            MBTI: {mbti()}({getMbtiName(mbti())})
          </div>
          <div class="rounded-xl text-[#d4af37] bg-[#d4af37]/20 py-2 px-4">
            適合率: {nenResult.precisionRate}
          </div>
        </div>
        <div class="flex text-sm text-purple-200 gap-1">
          <span>⚠️</span>
          <p>
            ※本診断結果はあくまで予想です。実際の念の系統を保証するものではありません。実際の念系統は、血統や特殊な環境での生い立ちなどによっても大きく変わります。
            念による対人戦闘において命を落とした場合や、その他いかなる損害についても、当方は一切の責任を負いません。
            あくまで参考程度にご利用ください。
            真剣に念能力の習得を目指す方は、水見式で正確に系統を判別し、日々の修行に励んでください。
          </p>
        </div>
      </div>
    </div>
  );
};
