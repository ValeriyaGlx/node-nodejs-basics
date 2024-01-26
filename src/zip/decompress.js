import fs from "fs";
import { createGunzip } from "zlib";
import { getDirectory } from "../getDirectory.js";

const __dirname = getDirectory(import.meta.url);

const decompress = async () => {
    const readStream = fs.createReadStream(`${__dirname}/files/archive.gz`);
    const writeStream = fs.createWriteStream(`${__dirname}/files/fileToCompress.txt`);
    const compressStream = createGunzip();
    readStream.pipe(compressStream).pipe(writeStream);
};

await decompress();
