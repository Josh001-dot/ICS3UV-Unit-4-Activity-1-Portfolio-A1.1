/**
 * @author Joshua Adeyemi
 * @version 1.0.0
 * @date 2025-12-14
 * @fileOverview This program prints a 10x10 grid using nested loops where odd rows are X's and even rows are O's.
 */

for (let i = 1; i <= 10; i++) {
  let line: string = "";
  for (let j = 1; j <= 10; j++) {
    if (i % 2 === 1) {
      line += "X";
    } else {
      line += "O";
    }
  }
  console.log(line);
}

console.log("\nDone.");
