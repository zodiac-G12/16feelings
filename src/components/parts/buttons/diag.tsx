import { DiagIcon } from "@/components/parts/icons";
import { useNavigate } from "@solidjs/router";
import { Accessor } from "solid-js";

export const DiagButton = ({ mbti }: { mbti: Accessor<string> }) => {
  const navigate = useNavigate();

  return (
    <div id="DiagButton">
      <button
        class="rounded-full border-gray-200 px-7 py-4 text-white flex items-center gap-2 bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-[linear-gradient(0deg, #667eea 0.00%, #764ba2 100.0%)]"
        onClick={() => navigate(`/nens/${mbti()}`)}
      >
        <DiagIcon />
        <span>念系統を診断する</span>
      </button>
    </div>
  );
};
