import { Accessor, For } from "solid-js";
import { DiagButton, MbtiButton } from "@/components/parts/buttons";
import { MBTI_NAMES_MAP } from "@/constants";

export const MbtiBlock = ({
  mbti,
  setMbti,
}: {
  mbti: Accessor<string>;
  setMbti: (mbti: string) => void;
}) => {
  return (
    <div class="flex justify-center py-16 bg-gray-100">
      <div class="flex flex-col items-center justify-center w-full p-8 mx-6 bg-white border-gray-200 shadow-xl rounded-2xl lg:w-1/3 lg:mx-0 gap-8">
        <div class="text-2xl font-bold text-black">
          MBTIタイプを選択してください
        </div>
        <div class="flex flex-wrap justify-center gap-4">
          <For each={MBTI_NAMES_MAP}>
            {(m) => (
              <MbtiButton
                name={m.mbti}
                explanation={m.mbtiName}
                color={m.color}
                mbti={mbti}
                setMbti={setMbti}
              />
            )}
          </For>
        </div>
        <DiagButton mbti={mbti} />
      </div>
    </div>
  );
};
