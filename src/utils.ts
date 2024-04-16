import { Client } from "pg";

export async function getClient() {
  const client = new Client(
    "postgres://YOUR_USER_NAME:YOUR_PASSWORD@kandula.db.elephantsql.com/DATABASE_NAME"
  );
  await client.connect();
  return client;
}
