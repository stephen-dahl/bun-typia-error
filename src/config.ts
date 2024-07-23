import {assert} from "typia";

export interface ENV {
    NODE_ENV: string
    HTTP_PORT: string
    SMTP_PORT: string
}

export const {NODE_ENV, HTTP_PORT, SMTP_PORT} = assert<ENV>(process.env)

console.log({NODE_ENV, HTTP_PORT, SMTP_PORT})
