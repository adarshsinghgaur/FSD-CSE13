import{EventEmitter}from "node:events";
const task = new EventEmitter();

const sayHi = (name) => {
    console.log(`Logged in ${name}`);
};
const starts = (name) => {
    console.log(`System Started `);
};
task.once("greet", starts);
task.on("greet", sayHi);

task.emit("greet", "Adarsh Singh");
task.emit("greet", "Ankur Mishra");
task.emit("greet", "Kushagra Jaiswal");