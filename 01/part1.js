const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
  const lines = data.split('\n').map((line) => line.trim());

  let totalDist = 0;

  const left = [];
  const right = [];

  for (line of lines) {
    const [l, r] = line.split('   ');
    left.push(Number(l));
    right.push(Number(r));
  }

  left.sort((a, b) => a - b);
  right.sort((a, b) => a - b);

  for (i in left) {
    const dist = Math.abs(left[i] - right[i]);

    totalDist += dist;
  }

  console.log(totalDist);
});
