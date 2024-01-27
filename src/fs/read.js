import fs from 'fs/promises';
import { getDirectory } from "../getDirectory.js";

const __dirname = getDirectory(import.meta.url);

const read = async () => {
  try {
    const readFile = await fs.readFile(`${__dirname}/files/fileToRead.txt`, 'utf-8');
    console.log(readFile);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await read();
