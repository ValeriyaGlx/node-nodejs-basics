import fs from "fs/promises";
import { getDirectory } from "../getDirectory.js";

const __dirname = getDirectory(import.meta.url);

const rename = async () => {
  try {
    await fs.rename(
      `${__dirname}/files/wrongFilename.txt`,
      `${__dirname}/files/properFilename.md`
    );
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await rename();
