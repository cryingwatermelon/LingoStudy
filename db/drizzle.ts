import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
import { Logger } from "drizzle-orm";
import "dotenv/config";

const sql = neon(process.env.DATABASE_URL!);
class MyLogger implements Logger {
  logQuery(query: string, params: unknown[]): void {
    console.warn(`----------------------------
${query}
----------------------------`);
  }
}

const db = drizzle(sql, { schema, logger: new MyLogger() });

export default db;
