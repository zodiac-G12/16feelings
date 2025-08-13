export const PenIcon = ({
  color,
  size,
}: {
  color: string;
  size: "small" | "large";
}) => {
  const width = size === "small" ? "24" : "44";
  const height = size === "small" ? "24" : "44";

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_6_101)">
        <g clip-path="url(#clip1_6_101)">
          <path
            d="M0.660931 21.7172C-0.215631 20.8406 -0.215631 19.4156 0.660931 18.5344L18.5344 0.660962C19.4109 -0.215601 20.8359 -0.215601 21.7172 0.660962L23.3391 2.28284C24.2156 3.1594 24.2156 4.5844 23.3391 5.46565L5.46093 23.3391C4.58437 24.2156 3.15937 24.2156 2.27812 23.3391L0.660931 21.7172ZM16.2937 8.79377L21.2156 3.8719L20.1281 2.77971L15.2062 7.70159L16.2984 8.79377H16.2937Z"
            fill={color}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_6_101">
          <rect width="24" height="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_6_101">
          <path d="M0 0H24V24H0V0Z" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
