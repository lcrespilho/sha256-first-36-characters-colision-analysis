const { hashTask } = require('./workers');
const { taskQueue } = require('@lcrespilho/async-task-queue');

// Realiza 4 tasks em paralelo
const TaskQueue = taskQueue(4);

const promises = [];

// Gera 1 bilhão de hashes. Tempo aproximado do teste: 20~30 minutos.
for (let i = 0; i < 100; i++) {
  promises.push(
    TaskQueue.push(done => {
      console.log(`iteraction: ${i}`);
      // Não aumentar mais que 10M de hashes, pois gera exceção no Node,
      // provavelmente relacionado com limite de memória do sistema operacional.
      // Se 10M quebrar, diminuir aqui e aumentar no "for".
      hashTask(10000000).then(done);
    })
  );
}

Promise.all(promises).then(results => {
  const colisions = results.reduce((a, b) => a + b, 0);
  // O ideal é ter 0 colisões.
  console.log(`Colisões de hashes: ${colisions}`);
});
