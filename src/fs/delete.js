import fs from "fs/promises";
import { getDirectory } from "../getDirectory.js";

const __dirname = getDirectory(import.meta.url);

const remove = async () => {
    try {
        await fs.rm(`${__dirname}/files/fileToRemove.txt`);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await remove();
