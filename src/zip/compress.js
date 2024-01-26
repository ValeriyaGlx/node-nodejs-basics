import fs from "fs";
import { createGzip } from "zlib";
import { getDirectory } from "../getDirectory.js";

const __dirname = getDirectory(import.meta.url);

const compress = async () => {
    const readStream = fs.createReadStream(`${__dirname}/files/fileToCompress.txt`);
    const writeStream = fs.createWriteStream(`${__dirname}/files/archive.gz`);
    const compressStream = createGzip();
    readStream.pipe(compressStream).pipe(writeStream);
};

await compress();
