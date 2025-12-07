#!/usr/bin/env node
import { Command } from 'commander';
const program = new Command();

program
  .name('gendiff')
  //.description('CLI to some JavaScript string utilities')
  .version('1.0.0');

program
  .description(' Compares two configuration files and shows a difference.')
  //.argument('<string>', 'string to split')
//   .option('-V,--version', 'output the version number')
//   .option('-h, --help', 'display help for command')
  /**.action((str, options) => {
    //const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));
  });**/

program.parse(process.argv);
//const genDiff = () => {

//}

//export default genDiff;