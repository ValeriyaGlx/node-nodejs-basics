import fs from 'fs';
import { createHash } from 'crypto';
import { getDirectory } from '../getDirectory.js';

const __dirname = getDirectory(import.meta.url);

const calculateHash = async () => {
    const hash = createHash('sha256');
    const readStream = fs.createReadStream(`${__dirname}/files/fileToCalculateHashFor.txt`);

    readStream.on('data', (chunk) => {
       hash.update(chunk);
    });

    readStream.on('end', () => {
        console.log(hash.digest('hex'));
    })
};

await calculateHash();
