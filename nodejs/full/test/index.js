const assert = require('assert');

try {
  // actual, expected, error message
  assert.strictEqual('node setup', 'node setup', 'The two strings don\'t seem to be equal!');
  console.log('The two strings seem to be equal!');
}
catch (err) {
  console.error(err.message);
  process.exit(1); // return failing exit code since a test failed
}
