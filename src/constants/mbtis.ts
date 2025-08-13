export const MBTIS = [
  "INTJ",
  "INTP",
  "ENTJ",
  "ENTP",
  "INFJ",
  "INFP",
  "ENFJ",
  "ENFP",
  "ISTJ",
  "ISFJ",
  "ESTJ",
  "ESFJ",
  "ISTP",
  "ISFP",
  "ESTP",
  "ESFP",
] as const;

export type Mbti = (typeof MBTIS)[number];

export const MBTI_NAMES = [
  "建築家",
  "論理学者",
  "指揮官",
  "討論者",
  "提唱者",
  "仲介者",
  "主人公",
  "広報運動家",
  "管理者",
  "擁護者",
  "幹部",
  "領事",
  "巨匠",
  "冒険家",
  "起業家",
  "エンターテイナー",
] as const;

export type MbtiName = (typeof MBTI_NAMES)[number];

export type MbtiColor = "blue" | "green" | "orange" | "red";

export const MBTI_NAMES_MAP: {
  mbti: Mbti;
  mbtiName: MbtiName;
  color: MbtiColor;
}[] = [
  { mbti: "INTJ", mbtiName: "建築家", color: "blue" },
  { mbti: "INTP", mbtiName: "論理学者", color: "blue" },
  { mbti: "ENTJ", mbtiName: "指揮官", color: "blue" },
  { mbti: "ENTP", mbtiName: "討論者", color: "blue" },
  { mbti: "INFJ", mbtiName: "提唱者", color: "green" },
  { mbti: "INFP", mbtiName: "仲介者", color: "green" },
  { mbti: "ENFJ", mbtiName: "主人公", color: "green" },
  { mbti: "ENFP", mbtiName: "広報運動家", color: "green" },
  { mbti: "ISTJ", mbtiName: "管理者", color: "orange" },
  { mbti: "ISFJ", mbtiName: "擁護者", color: "orange" },
  { mbti: "ESTJ", mbtiName: "幹部", color: "orange" },
  { mbti: "ESFJ", mbtiName: "領事", color: "orange" },
  { mbti: "ISTP", mbtiName: "巨匠", color: "red" },
  { mbti: "ISFP", mbtiName: "冒険家", color: "red" },
  { mbti: "ESTP", mbtiName: "起業家", color: "red" },
  { mbti: "ESFP", mbtiName: "エンターテイナー", color: "red" },
] as const;
