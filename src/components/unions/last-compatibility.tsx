import { For, Show, Accessor, createMemo } from "solid-js";
import { Nen, NenEng, NENS, NEN_COMPATIBILITY_MAP } from "@/constants";
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

export const LastCompatibility = ({
  nenResult,
}: {
  nenResult: Accessor<
    | {
        nenName: Nen;
        nenEngName: NenEng;
        precisionRate: `${number}%`;
      }
    | undefined
  >;
}) => {
  if (!nenResult()) {
    return null;
  }

  const myNen = createMemo(() => nenResult()?.nenName);

  // 自分以外の系統
  const otherNens = createMemo<readonly Nen[]>(() => {
    const m = myNen();
    return m ? (NENS.filter((n) => n !== m) as readonly Nen[]) : [];
  });

  // 系統 → 相性率 のテーブル（1 回で計算）
  const rateMap = createMemo(() => {
    const m = myNen();
    if (!m) return new Map<Nen, `${number}%`>();
    return new Map<Nen, `${number}%`>(
      otherNens().map((n) => [
        n,
        getRate({ myNen: m, nen: n as Exclude<Nen, typeof m> }),
      ]),
    );
  });

  return (
    <div class="flex justify-center">
      <div class="flex flex-col w-5/6 p-6 lg:w-1/3 gap-4 lg:gap-14 rounded-2xl bg-black/30">
        <div class="flex items-center text-lg lg:text-2xl gap-2">
          <PizaIcon />
          <span>他系統との相性</span>
        </div>

        <div class="flex flex-wrap justify-center gap-4">
          <For each={otherNens()}>
            {(nen) => {
              const rate = rateMap().get(nen)!; // otherNens にしか回らないので必ず存在
              const color = rateColor({ rate });
              return (
                <div
                  class={`flex flex-col w-5/6 lg:w-[30%] p-4 gap-1 rounded-xl ${color?.border} ${color?.background}`}
                >
                  <div class="flex justify-between text-white/90">
                    <div>{nen}</div>
                    <div class={`${color?.text}`}>{rate}</div>
                  </div>

                  <Show when={rate === "20%"}>
                    <div class="w-full h-2 rounded-full bg-white/10">
                      <div class="w-1/5 h-2 bg-red-600 rounded-full" />
                    </div>
                  </Show>
                  <Show when={rate === "50%"}>
                    <div class="w-full h-2 rounded-full bg-white/10">
                      <div class="w-1/2 h-2 bg-blue-600 rounded-full" />
                    </div>
                  </Show>
                  <Show when={rate === "80%"}>
                    <div class="w-full h-2 rounded-full bg-white/10">
                      <div class="w-3/4 h-2 bg-green-600 rounded-full" />
                    </div>
                  </Show>
                </div>
              );
            }}
          </For>
        </div>
      </div>
    </div>
  );
};
