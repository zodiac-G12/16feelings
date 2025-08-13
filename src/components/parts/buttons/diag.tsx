import { DiagIcon } from "@/components/parts/icons";
import { useNavigate } from "@solidjs/router";
import { Accessor } from "solid-js";

export const DiagButton = ({ mbti }: { mbti: Accessor<string> }) => {
  const navigate = useNavigate();

  const selectedClass =
    "flex items-center py-4 text-white border-gray-200 rounded-full px-7 gap-2 bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-[linear-gradient(0deg, #667eea 0.00%, #764ba2 100.0%)]";
  const disabledClass =
    "flex items-center py-4 text-white border-gray-200 rounded-full px-7 gap-2 bg-gray-300";

  return (
    <div id="DiagButton">
      <button
        disabled={!mbti()}
        class={mbti() ? selectedClass : disabledClass}
        onClick={() => navigate(`/nens/${mbti()}`)}
      >
        <DiagIcon />
        <span>念系統を診断する</span>
      </button>
    </div>
  );
};
