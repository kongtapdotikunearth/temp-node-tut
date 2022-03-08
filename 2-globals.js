// __dirname   - path to current directory
// __filename  - filename
// require     - function to use moduels (CommonJS)
// module      - info about current module
// process     - info about env where the program is being executed

console.log(__dirname);
console.log(__filename);
setInterval(() => {
    console.log("hello world");
}, 1000)