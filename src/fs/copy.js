import fs from "fs/promises";
import { getDirectory } from "../getDirectory.js";

const __dirname = getDirectory(import.meta.url);

const copy = async () => {
  try {
    await fs.cp(`${__dirname}/files`, `${__dirname}/files_copy`, {
      force: false,
      errorOnExist: true,
      recursive: true,
    });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await copy();
