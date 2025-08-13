import { Nen, Mbti, NenEng } from "@/constants";

export const MBTI_TO_NENS_MAP: {
  [key in Mbti]: {
    nenName: Nen;
    nenEngName: NenEng;
    precisionRate: `${number}%`;
  };
} = {
  INTJ: {
    nenName: "特質系",
    nenEngName: "Specialization",
    precisionRate: "90%",
  },
  INTP: {
    nenName: "操作系",
    nenEngName: "Manipulation",
    precisionRate: "100%",
  },
  ENTJ: {
    nenName: "特質系",
    nenEngName: "Specialization",
    precisionRate: "100%",
  },
  ENTP: {
    nenName: "変化系",
    nenEngName: "Transmutation",
    precisionRate: "100%",
  },

  INFJ: {
    nenName: "特質系",
    nenEngName: "Specialization",
    precisionRate: "100%",
  },
  INFP: {
    nenName: "具現化系",
    nenEngName: "Conjuration",
    precisionRate: "100%",
  },
  ENFJ: { nenName: "放出系", nenEngName: "Emission", precisionRate: "70%" },
  ENFP: {
    nenName: "特質系",
    nenEngName: "Specialization",
    precisionRate: "80%",
  },

  ISTJ: { nenName: "強化系", nenEngName: "Enhancement", precisionRate: "80%" },
  ISFJ: {
    nenName: "具現化系",
    nenEngName: "Conjuration",
    precisionRate: "100%",
  },
  ESTJ: { nenName: "強化系", nenEngName: "Enhancement", precisionRate: "100%" },
  ESFJ: { nenName: "強化系", nenEngName: "Enhancement", precisionRate: "80%" },

  ISTP: {
    nenName: "操作系",
    nenEngName: "Manipulation",
    precisionRate: "100%",
  },
  ISFP: {
    nenName: "具現化系",
    nenEngName: "Conjuration",
    precisionRate: "100%",
  },
  ESTP: { nenName: "放出系", nenEngName: "Emission", precisionRate: "100%" },
  ESFP: { nenName: "放出系", nenEngName: "Emission", precisionRate: "90%" },
} as const;
