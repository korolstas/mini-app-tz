import { THoroscopeRequest } from "../types/horoscope";
import { api } from "./instance";

export const endPoints = {
  //TODO закинуть в .env ссылку
  postHoroscope: async (body: THoroscopeRequest) =>
    await api("post", "https://poker247tech.ru/get_horoscope/", body),
};
