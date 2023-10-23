import { DB_APP_PASS, DB_APP_USER } from "../config";

export const dbConnection = `mongodb+srv://${DB_APP_USER}:${DB_APP_PASS}@cluster0.5yume.mongodb.net/`;