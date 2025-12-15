#!/usr/bin/env node
import { Command } from 'commander';
import getFile from '../src/parseData.js';
const program = new Command();

program
    .name('gendiff')
    .description('CLI for files')
    .version('1.0.0');

program
    .description(' Compares two configuration files and shows a difference.')
    .arguments('<filepath1> <filepath2>')
    .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    
    const [data1, data2] = getFile(filepath1, filepath2);
    console.log(data1);
    console.log(data2);

  });

program.parse(process.argv);
const genDiff = () => {

}

export default genDiff;