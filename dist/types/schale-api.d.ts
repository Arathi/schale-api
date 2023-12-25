import { AxiosInstance } from "axios";
import { Server, Language } from "./domains/types";
import { Student } from './domains/student';
import { Item } from './domains/item';
export interface SchaleApiOptions {
    baseURL?: string;
    server?: Server;
    language?: Language;
}
export declare class SchaleApi {
    options: SchaleApiOptions;
    axios: AxiosInstance;
    get baseURL(): string;
    get server(): Server;
    get language(): Language;
    constructor(options?: SchaleApiOptions);
    getStudents(server?: Server, language?: Language, useMin?: boolean): Promise<Student[]>;
    getItems(server?: Server, language?: Language, useMin?: boolean): Promise<Item[]>;
}
