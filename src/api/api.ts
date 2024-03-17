import axios, { AxiosInstance } from "axios";
import { User, UsersPayload } from "./interfaces";
import { ENV } from "../constants";

export const mock = 1;

const baseUrl =
  ENV === "local" ? "http://localhost:3000" : `http://127.0.0.1:3000`;

let api: Api | null = null;

class Api {
  private readonly axiosInstance: AxiosInstance;
  constructor(baseURL: string) {
    this.axiosInstance = axios.create({ baseURL, timeout: 5000 });
  }

  getUsers(params?: UsersPayload): Promise<User[] | []> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.axiosInstance.get<User[] | []>("/", {
          params,
        });
        resolve(result.data);
      } catch (error) {
        reject(error);
      }
    });
  }
}

export const getApi = () => {
  if (!api) api = new Api(baseUrl);
  return api;
};
