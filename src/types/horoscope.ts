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

export interface THoroscopeRequest extends THoroscopeBasicInfo {
  sign?: string;
}

export interface THoroscopeData extends THoroscopeBasicInfo {
  horoscope: TSignHoroscope | string;
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
