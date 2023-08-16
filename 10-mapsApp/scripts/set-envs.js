import "dotenv/config";
import fs from "fs";
import path from "path";

const { mkdirSync, writeFileSync } = fs;
const targetPath = "./src/environments/environment.ts";

const envFileContent = `export const environment = {
  MAPBOX_KEY : "${process.env.MAPBOX_KEY}",
}`;

mkdirSync("./src/environments", { recursive: true });
writeFileSync(targetPath, envFileContent);
