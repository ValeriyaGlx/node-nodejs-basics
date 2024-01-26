import { Worker } from "node:worker_threads";
import os from "os";
import { getDirectory } from "../getDirectory.js";

const __dirname = getDirectory(import.meta.url);
const coresLength = os.availableParallelism();

const promisesArr = [];

const performCalculations = async () => {
  for (let i = 0; i <= coresLength; i++) {
    const promise = new Promise((resolve) => {
      const worker = new Worker(`${__dirname}/worker.js`, {
        workerData: i + 10,
      });
      worker.on("message", (data) => {
        resolve({
          status: "resolved",
          data: data,
        });
      });
      worker.on("error", () => {
        resolve({
          status: "error",
          data: null,
        });
      });
    });
    promisesArr.push(promise);
  }

  const res = await Promise.all(promisesArr);

  console.log(res);
};

await performCalculations();
