// convertDependencies.js  : file name 
// to run : node convertDependencies.js

//import fs from 'fs';
const fs = require('fs');

// Load package.json file
// import packageJson from './package.json' assert { type: "json" };
const packageJson = require('./package.json');

// Extract dependencies
const dependencies = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies
};

// Generate DOT content
let dotContent = 'digraph dependencies {\n';
Object.keys(dependencies).forEach(packageName => {
    dotContent += `    "${packageName}" -> {`;
    const packageVersion = dependencies[packageName];
    dotContent += ` "${packageVersion}" };\n`;
});
dotContent += '}';

// Write DOT content to file
fs.writeFileSync('dependencies.dot', dotContent);
