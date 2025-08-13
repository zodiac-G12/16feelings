import {
  StrengthIcon,
  PaperIcon,
  EyeIcon,
  PenIcon,
  BrainIcon,
  HeartIcon,
} from "@/components/parts/icons";
import { NenCards } from "@/components/parts/cards";

export const NenBlock = () => {
  return (
    <div id="NenBlock" class="py-16 bg-white">
      <div class="pb-12 text-3xl font-bold text-black">念系統について</div>
      <div class="flex flex-wrap justify-center gap-8">
        <NenCards
          name="強化系"
          explanation="物質の持つ機能や力を強化する系統。シンプルで直接的な戦闘スタイル。"
          color="red"
          icon={<StrengthIcon color="#EF4444" size="small" />}
        />
        <NenCards
          name="放出系"
          explanation="オーラを体から離して飛ばす系統。遠距離攻撃に長けている。"
          color="blue"
          icon={<PaperIcon color="#3B82F6" size="small" />}
        />
        <NenCards
          name="変化系"
          explanation="オーラの性質を変える系統。柔軟性と応用力に優れる。"
          color="purple"
          icon={<EyeIcon color="#A855F7" size="small" />}
        />
        <NenCards
          name="具現化系"
          explanation="オーラで物質を作り出す系統。想像力が重要な要素。"
          color="green"
          icon={<PenIcon color="#22C55E" size="small" />}
        />
        <NenCards
          name="操作系"
          explanation="物質や生物を操る系統。戦略的思考が求められる。"
          color="yellow"
          icon={<BrainIcon color="#EAB308" size="small" />}
        />
        <NenCards
          name="特質系"
          explanation="他の系統に分類されない特殊な能力。非常に稀な系統。"
          color="pink"
          icon={<HeartIcon color="#EC4899" size="small" />}
        />
      </div>
    </div>
  );
};
