import { fork  } from 'node:child_process';
import { getDirectory } from "../getDirectory.js";

const __dirname = getDirectory(import.meta.url);

const spawnChildProcess = async (args) => {
    const child = fork(`${__dirname}/files/script.js`, args, { stdio: ['inherit', 'pipe', 'ignore', 'ipc' ] });
    child.stdout.on("data", (data) => {
        console.log(`Stdout: ${data}`);
    })
};

spawnChildProcess( ['someArgument1', 'someArgument2']);
