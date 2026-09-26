const { add } = require("./add");
const got = add(2, 2);
if (got !== 4) {
  console.error(`FAIL add(2, 2) returned ${got}, expected 4`);
  process.exit(1);
}
console.log("ok");