import { JSX } from "solid-js";

export const NenCards = ({
  name,
  explanation,
  color,
  icon,
}: {
  name: string;
  explanation: string;
  color: "red" | "blue" | "purple" | "green" | "yellow" | "pink";
  icon: JSX.Element;
}) => {
  const backgroundColor = {
    red: "bg-red-100",
    blue: "bg-blue-100",
    purple: "bg-purple-100",
    green: "bg-green-100",
    yellow: "bg-yellow-100",
    pink: "bg-pink-100",
  }[color];
  const borderColor = {
    red: "border-red-500",
    blue: "border-blue-500",
    purple: "border-purple-500",
    green: "border-green-500",
    yellow: "border-yellow-500",
    pink: "border-pink-500",
  }[color];
  const mainClass = `flex flex-col items-start text-black rounded-lg p-6 gap-4 border-l-4 mx-6 w-full lg:mx-0 lg:w-1/4 ${backgroundColor} ${borderColor}`;

  return (
    <div class={mainClass}>
      <div class="flex gap-3">
        {icon}
        <div class="text-xl">{name}</div>
      </div>
      <p class="text-left text-gray-600">{explanation}</p>
    </div>
  );
};
