import axios, { Method, ResponseType } from "axios";

const instance = () =>
  axios.create({
    baseURL: "",
  });

export const api = <T>(
  method: Method,
  urlPoint: string,
  params?: T,
  responseType: ResponseType = "json"
) =>
  instance().request({
    method,
    url: urlPoint,
    data: params,
    responseType: responseType,
  });
