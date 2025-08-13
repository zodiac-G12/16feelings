import { Accessor } from "solid-js";

export const MbtiButton = ({
  name,
  explanation,
  color,
  mbti,
  setMbti,
}: {
  name: string;
  explanation: string;
  color: "red" | "blue" | "green" | "orange";
  mbti: Accessor<string>;
  setMbti: (mbti: string) => void;
}) => {
  const fontColor = {
    red: "text-red-900",
    blue: "text-blue-900",
    green: "text-green-900",
    orange: "text-orange-900",
  }[color];
  const backgroundColor = {
    red: "bg-red-100",
    blue: "bg-blue-100",
    green: "bg-green-100",
    orange: "bg-orange-100",
  }[color];
  const mainClass = `flex flex-col items-center rounded-lg border-2 p-6 w-full lg:w-1/5 ${backgroundColor}`; // ${borderColor}`;

  return (
    <a
      href="#DiagButton"
      class={`${mainClass}`}
      classList={{
        "border-blue-700 font-bold": mbti() === name,
        "border-red-200": color === "red" && mbti() !== name,
        "border-blue-200": color === "blue" && mbti() !== name,
        "border-green-200": color === "green" && mbti() !== name,
        "border-orange-200": color === "orange" && mbti() !== name,
      }}
      onClick={() => {
        setMbti(name);
        console.log(mbti());
      }}
    >
      <div
        class={`${fontColor}`}
        classList={{
          "font-bold": mbti() !== name,
          "font-extrabold": mbti() === name,
        }}
      >
        {name}
      </div>
      <div class="text-gray-600">{explanation}</div>
    </a>
  );
};
