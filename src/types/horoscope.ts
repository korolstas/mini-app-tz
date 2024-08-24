export type TSignHoroscope = {
  sagittarius: string;
  capricorn: string;
  aquarius: string;
  scorpio: string;
  gemini: string;
  cancer: string;
  taurus: string;
  pisces: string;
  aries: string;
  libra: string;
  virgo: string;
  leo: string;
};

type THoroscopeBasicInfo = {
  language: string;
  period: string;
};

export interface IHoroscopeRequest extends THoroscopeBasicInfo {
  sign?: string;
}

export interface IHoroscopeData extends THoroscopeBasicInfo {
  horoscope: TSignHoroscope | string;
}

export interface IHoroscopeDrawer {
  horoscope: string | null;
  sign: string | null;
}

export enum SignsEnum {
  Sagittarius = "Sagittarius",
  Capricorn = "Capricorn",
  Aquarius = "Aquarius",
  Scorpio = "Scorpio",
  Gemini = "Gemini",
  Cancer = "Cancer",
  Taurus = "Taurus",
  Pisces = "Pisces",
  Aries = "Aries",
  Libra = "Libra",
  Virgo = "Virgo",
  Leo = "Leo",
}
