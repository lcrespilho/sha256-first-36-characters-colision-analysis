const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require('worker_threads');

if (isMainThread) {
  module.exports.hashTask = function hashTask(
    numberofhashestogenerate = 1000000
  ) {
    return new Promise((resolve, reject) => {
      const worker = new Worker(__filename, {
        workerData: numberofhashestogenerate,
      });
      worker.on('message', resolve);
      worker.on('error', reject);
      worker.on('exit', code => {
        if (code !== 0)
          reject(new Error(`Worker stopped with exit code ${code}`));
      });
    });
  };
} else {
  const { createHash } = require('crypto');
  function sha256(s) {
    return createHash('sha256').update(s).digest('hex');
  }
  let shortHashes = new Set();
  const numberofhashestogenerate = workerData;
  let seed = Math.random().toString(36).substring(2); // ex: 'n9p7bebiaua'
  for (let i = 0; i < numberofhashestogenerate; i++) {
    seed = sha256(seed);
    shortHashes.add(seed.slice(0, 36));
  }

  // Retorna a quantidade de colisões
  parentPort.postMessage(numberofhashestogenerate - shortHashes.size);
}
