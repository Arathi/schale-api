import Axios, { AxiosInstance } from "axios";
import { Server, ServerIndexes, Language } from "./domains/types";
import { Student } from './domains/student';
import { Item } from './domains/item';

export interface SchaleApiOptions {
  baseURL?: string;
  server?: Server;
  language?: Language;
}

const DefaultBaseURL = "https://schale.gg";
const DefaultServer = Server.Japan;
const DefaultLanguage = Language.ChineseSimplified;

export class SchaleApi {
  options: SchaleApiOptions;
  axios: AxiosInstance;

  get baseURL(): string { return this.options.baseURL ?? DefaultBaseURL; }
  get server(): Server { return this.options.server ?? DefaultServer; }
  get language(): Language { return this.options.language ?? DefaultLanguage; }

  constructor(options?: SchaleApiOptions) {
    const defaultOptions: SchaleApiOptions = {
      baseURL: DefaultBaseURL,
      server: DefaultServer,
      language: DefaultLanguage,
    };
    this.options = Object.assign(defaultOptions, options);

    this.axios = Axios.create({
      baseURL: this.baseURL,
    });
  }

  getStudents(
    server?: Server, 
    language?: Language, 
    useMin: boolean = false,
  ): Promise<Student[]> {
    const svr = server ?? this.server;
    const lang = language ?? this.language;
    const dotMin = (useMin) ? ".min" : "";
    const url = `/data/${lang}/students${dotMin}.json`;
    const serverIndex = ServerIndexes[svr];

    return new Promise((resolve, reject) => {
      this.axios.get<Student[]>(url)
        .then((resp) => {
          if (resp.status != 200) {
            reject(resp.statusText);
          }
          const filtered = resp.data.filter((s) => {
            const released = s.IsReleased[serverIndex];
            return released;
          });
          resolve(filtered);
        })
        .catch((reason) => {
          reject(reason)
        });
    });
  }

  getItems(
    server?: Server, 
    language?: Language, 
    useMin: boolean = false,
  ): Promise<Item[]> {
    const svr = server ?? this.server;
    const lang = language ?? this.language;
    const dotMin = (useMin) ? ".min" : "";
    const url = `/data/${lang}/items${dotMin}.json`;
    const serverIndex = ServerIndexes[svr];

    return new Promise((resolve, reject) => {
      this.axios.get<Item[]>(url)
        .then((resp) => {
          if (resp.status != 200) {
            reject(resp.statusText);
          }
          const filtered = resp.data.filter((it) => {
            const released = it.IsReleased[serverIndex];
            return released;
          });
          resolve(filtered);
        })
        .catch((reason) => {
          reject(reason)
        });
    });
  }
}
