export const HeartIcon = ({
  color,
  size,
}: {
  color: string;
  size: "small" | "large";
}) => {
  const width = size === "small" ? "25" : "45";
  const height = size === "small" ? "24" : "44";

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_6_119)">
        <g clip-path="url(#clip1_6_119)">
          <path
            d="M2.55937 14.0813L11.0297 21.9891C11.3813 22.3172 11.8453 22.5 12.3281 22.5C12.8109 22.5 13.275 22.3172 13.6266 21.9891L22.0969 14.0813C23.5219 12.7547 24.3281 10.8938 24.3281 8.94844V8.67657C24.3281 5.40001 21.9609 2.60626 18.7313 2.06719C16.5938 1.71094 14.4187 2.40938 12.8906 3.93751L12.3281 4.50001L11.7656 3.93751C10.2375 2.40938 8.0625 1.71094 5.925 2.06719C2.69531 2.60626 0.328125 5.40001 0.328125 8.67657V8.94844C0.328125 10.8938 1.13437 12.7547 2.55937 14.0813Z"
            fill={color}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_6_119">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.328125)"
          />
        </clipPath>
        <clipPath id="clip1_6_119">
          <path d="M0.328125 0H24.3281V24H0.328125V0Z" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
