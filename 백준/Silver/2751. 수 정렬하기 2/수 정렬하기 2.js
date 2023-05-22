//vscode
const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : __filename.split("/").pop().slice(0, -3) + ".txt"
  )
  .toString()
  .trim()
  .split("\n");
function bubblesort(n) {
  n.shift();
  let str = "";
  let result = n
    .map(Number)
    .sort((a, b) => a - b)
    .forEach((x) => (str += `${x}\n`));
  console.log(str.slice(0, str.length - 1));
}

bubblesort(input);
