process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

// process.stdin.on('data', (data) => {
//   const name = data.toString().trim();
//   if (name !== null) {
//     process.stdout.write(`Your name is: ${name}\n`);
//   }
//   process.stdout.write('This important software is now closing\n');
//   process.exit();
// });

// process.stdin.on('end', () => {
//   process.stdout.write('This important software is now closing\n');
//   process.exit();
// });
