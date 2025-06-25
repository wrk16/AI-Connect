import { betterAuth, Schema } from "better-auth";

import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "@/db"; // your drizzle instance
import * as schemas from "@/db/schema"; // your schemas
 
export const auth = betterAuth({
    emailAndPassword: {enabled: true },

    // google: { enabled: true },
    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
        schema: {
            ...schemas, 
        },
    }),
});