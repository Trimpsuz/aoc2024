const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
  const lines = data.split('\n').map((line) => line.trim());

  let totalSim = 0;

  const left = [];
  const right = [];

  for (line of lines) {
    const [l, r] = line.split('   ');
    left.push(Number(l));
    right.push(Number(r));
  }

  left.sort((a, b) => a - b);

  const occurrences = new Map();

  right.forEach((item) => {
    occurrences.set(item, (occurrences.get(item) || 0) + 1);
  });

  for (num of left) {
    const sim = num * (occurrences.get(num) || 0);

    totalSim += sim;
  }

  console.log(totalSim);
});
