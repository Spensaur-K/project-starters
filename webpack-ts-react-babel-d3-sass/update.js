/**
 * Makes updating dependencies simpler by printing a command to run and dumping package.json's depDependencies
 */

const pack = require("./package.json");
const deps = Object.keys(pack.devDependencies);

console.log("Run the following command manually: \n");

console.log(`npm install --save-dev ${deps.join(" ")}`);

const fs = require("fs");
const path = require("path");

const newPack = { ...pack };
newPack.devDependencies = {};

fs.writeFileSync(path.join(__dirname, "package.json"), JSON.stringify(newPack));
