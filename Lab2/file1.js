import { writeFile } from "fs/promises";

await writeFile("stud.txt", "Name: Adarsh Singh");
console.log("File written");
