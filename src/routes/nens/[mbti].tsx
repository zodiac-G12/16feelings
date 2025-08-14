import { createMemo } from "solid-js";
import { useParams, useNavigate, useLocation } from "@solidjs/router";
import { MBTI_TO_NENS_MAP, NEN_EXPLANATIONS_MAP } from "@/constants";
import {
  Header,
  LastResult,
  LastTop,
  LastResultPrefix,
  LastCharactors,
  LastButtons,
  LastCompatibility,
} from "@/components/unions";
import { isMbti } from "@/logics";

export default function Content() {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const mbti = createMemo(() => params.mbti ?? "", [params, location]);

  const nenResult = createMemo(() => {
    const m = mbti();

    if (!isMbti(m)) {
      return;
    }

    return MBTI_TO_NENS_MAP[m];
  }, [mbti, params, location]);

  const getThisUrl = () => {
    // SSRでも安全に動作
    if (typeof window !== "undefined") {
      return (
        window.location.origin +
        location.pathname +
        location.search +
        location.hash
      );
    }
    // サーバー側ではオリジンは取れないのでパスだけ返す
    return location.pathname + location.search + location.hash;
  };

  const thisUrl = getThisUrl();

  const nenName = nenResult() ? nenResult()?.nenName : "";
  const nenExplanation = nenName ? NEN_EXPLANATIONS_MAP[nenName] : "";

  const postSentense = `あなたの念系統は${nenName}！${nenExplanation ? nenExplanation.split("。").slice(0, -2).join("。") + "。" : ""}`;

  if (nenResult() === undefined) {
    navigate("/404");
    return null;
  }

  return (
    <main class="text-white mx-auto pb-8 bg-gradient-to-r from-[#0F172A] to-[#1E293B] bg-[linear-gradient(90deg,#0F172A_0%,#581C87_50%,#1E293B_100%)]">
      <Header />
      <div class="flex flex-col justify-center pt-8 gap-8">
        <LastTop />
        <LastResultPrefix />
        <LastResult mbti={mbti} nenResult={nenResult} />
        <LastCharactors nenResult={nenResult} />
        <LastCompatibility nenResult={nenResult} />
        <LastButtons
          thisUrl={thisUrl}
          postSentense={postSentense}
          handleDiag={() => navigate("/")}
        />
      </div>
    </main>
  );
}
