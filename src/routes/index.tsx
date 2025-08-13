import { createSignal } from "solid-js";
import { Header, Top, NenBlock, MbtiBlock } from "@/components/unions";

export default function Home() {
  const [mbti, setMbti] = createSignal<string>("");

  return (
    <main class="text-center mx-auto text-white bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-[linear-gradient(0deg, #667eea 0.00%, #764ba2 100.0%)]">
      {/* Header */}
      <Header />
      {/* top */}
      <Top />
      {/* nen explanation */}
      <NenBlock />
      {/* mbti */}
      <MbtiBlock setMbti={setMbti} mbti={mbti} />
    </main>
  );
}
