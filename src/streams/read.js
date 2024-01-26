import fs from "fs";
import { getDirectory } from "../getDirectory.js";

const __dirname = getDirectory(import.meta.url);

const read = async () => {
  const readStream = fs.createReadStream(`${__dirname}/files/fileToRead.txt`);
  readStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
};

await read();
