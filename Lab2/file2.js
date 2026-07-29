import { readFile } from "fs/promises";

const data = await readFile("stud.txt", "utf8");
console.log("file contents:");
console.log(data);
