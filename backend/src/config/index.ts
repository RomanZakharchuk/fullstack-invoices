import { config } from 'dotenv';

const envPath = process.env.NODE_ENV === 'test'
    ? '.env.test'
    : '.env';

config({ path: envPath });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';

export const {
    NODE_ENV,
    PORT,
    DB_APP_USER,
    DB_APP_PASS,
    LOG_FORMAT,
    LOG_DIR,
    ORIGIN,
} = process.env;