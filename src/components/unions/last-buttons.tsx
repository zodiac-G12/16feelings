import { RedoIcon, TweetIcon, SaveIcon } from "@/components/parts/icons";

export const LastButtons = ({
  postSentense,
  thisUrl,
  handleDiag,
}: {
  postSentense: string;
  thisUrl: string;
  handleDiag: () => void;
}) => {
  return (
    <div class="flex flex-col gap-4">
      <div class="flex justify-center">
        <button
          class="flex items-center justify-center gap-2 shadow-[0px_10px_15px_0px_rgba(0,0,0,0.10)] rounded-full bg-gradient-to-r from-[#9333ea] to-[#db2777] bg-[linear-gradient(90deg,#9333ea_0%,#db2777_100%)] py-4 px-7"
          onClick={handleDiag}
        >
          <RedoIcon />
          <span>もう一度診断する</span>
        </button>
      </div>
      <div class="flex justify-center gap-4">
        <div class="flex justify-center">
          <a
            href={`http://twitter.com/share?text=${postSentense}&url=${thisUrl}&hashtags=MBTIxHunter念診断&hashtags=mbti&hashtags=ハンターハンター`}
            target="_blank"
            class="flex items-center justify-center gap-2 shadow-[0px_10px_15px_0px_rgba(0,0,0,0.10)] rounded-full bg-blue-600 py-3 px-4"
          >
            <TweetIcon />
            <span>結果をシェア</span>
          </a>
        </div>
        <div class="flex justify-center">
          <button class="flex items-center justify-center gap-2 shadow-[0px_10px_15px_0px_rgba(0,0,0,0.10)] rounded-full bg-green-600 py-3 px-4">
            <SaveIcon />
            <span>結果を保存</span>
          </button>
        </div>
      </div>
    </div>
  );
};
