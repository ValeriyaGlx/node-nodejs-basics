import fs from "fs/promises";
import { getDirectory } from "../getDirectory.js";

const __dirname = getDirectory(import.meta.url);

const create = async () => {
  try {
    await fs.writeFile(`${__dirname}/files/fresh.txt`, "I am fresh and young", { flag: 'wx' });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await create();
