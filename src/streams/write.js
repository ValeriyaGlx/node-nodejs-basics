import fs from "fs";
import { getDirectory } from "../getDirectory.js";

const __dirname = getDirectory(import.meta.url);

const write = async () => {
    const writeStream = fs.createWriteStream(`${__dirname}/files/fileToWrite.txt`);
    process.stdin.pipe(writeStream);
};

await write();
