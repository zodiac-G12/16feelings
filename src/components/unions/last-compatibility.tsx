import { For, Show } from "solid-js";
import { Nen, NENS, NEN_COMPATIBILITY_MAP } from "@/constants";
import { PizaIcon } from "@/components/parts/icons";

const exclude =
  <T extends Nen>(v: T) =>
  (x: T): x is Exclude<T, typeof v> =>
    x !== v;

const getRate = <T extends Nen>({
  myNen,
  nen,
}: {
  myNen: T;
  nen: Exclude<Nen, T>;
}): `${number}%` => {
  return NEN_COMPATIBILITY_MAP[myNen][nen];
};

const rateColor = ({ rate }: { rate: `${number}%` }) => {
  const RATE_COLOR_MAP = {
    "20%": {
      background: "bg-red-600/10",
      border: "border-red-600",
      text: "text-red-600",
    },
    "50%": {
      background: "bg-blue-600/10",
      border: "border-blue-600",
      text: "text-blue-600",
    },
    "80%": {
      background: "bg-green-600/10",
      border: "border-breen-600",
      text: "text-green-600",
    },
  };

  if (rate in RATE_COLOR_MAP) {
    return RATE_COLOR_MAP[rate as keyof typeof RATE_COLOR_MAP];
  }
  return undefined;
};

export const LastCompatibility = ({ nenName }: { nenName: Nen }) => {
  return (
    <div class="flex justify-center">
      <div class="flex flex-col w-1/3 p-6 gap-14 rounded-2xl bg-black/30">
        <div class="flex items-center text-2xl gap-2">
          <PizaIcon />
          <span>他系統との相性</span>
        </div>
        <div class="flex flex-wrap justify-center gap-4">
          <For each={NENS.filter(exclude(nenName))}>
            {(nen) => (
              <div
                class={`flex flex-col w-[30%] p-4 gap-1 rounded-xl ${rateColor({ rate: getRate({ myNen: nenName, nen }) })?.border} ${rateColor({ rate: getRate({ myNen: nenName, nen }) })?.background}`}
              >
                <div class="flex justify-between text-white/90">
                  <div>{nen}</div>
                  <div
                    class={`${rateColor({ rate: getRate({ myNen: nenName, nen }) })?.text}`}
                  >
                    {getRate({ myNen: nenName, nen })}
                  </div>
                </div>
                <Show when={getRate({ myNen: nenName, nen }) === "20%"}>
                  <div class="w-full h-2 rounded-full bg-white/10">
                    <div class="w-1/5 h-2 bg-red-600 rounded-full"></div>
                  </div>
                </Show>
                <Show when={getRate({ myNen: nenName, nen }) === "50%"}>
                  <div class="w-full h-2 rounded-full bg-white/10">
                    <div class="w-1/2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </Show>
                <Show when={getRate({ myNen: nenName, nen }) === "80%"}>
                  <div class="w-full h-2 rounded-full bg-white/10">
                    <div class="w-3/4 h-2 bg-green-600 rounded-full"></div>
                  </div>
                </Show>
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  );
};
