import { Mbti, MBTIS, MBTI_NAMES_MAP, MbtiName } from "@/constants";

// string を Mbti に絞る型ガード
export const isMbti = (v: string): v is Mbti =>
  (MBTIS as readonly string[]).includes(v);

export const getMbtiName = (mbti: string): MbtiName | undefined => {
  if (!isMbti(mbti)) {
    return;
  }

  return MBTI_NAMES_MAP.find((m) => m.mbti === mbti)?.mbtiName;
};
