const fs = require('node:fs');
console.log('COMMITISH_MARKER=B');
fs.appendFileSync(process.env.GITHUB_OUTPUT, 'marker=B\n');
