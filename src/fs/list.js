import fs from "fs/promises";
import { getDirectory } from "../getDirectory.js";

const __dirname = getDirectory(import.meta.url);

const list = async () => {
  try {
    const files = await fs.readdir(`${__dirname}/files`, {recursive: true});
    console.log(files);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await list();
