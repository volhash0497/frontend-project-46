#!/usr/bin/env node
import { Command } from 'commander';
import getFile from '../src/parseData.js';
const program = new Command();
import _ from 'lodash';

const format = (obj) => {
    const lines = [];

    for (const key in obj) {
        const valueObj = obj[key];
        if (Array.isArray(valueObj)) {
            for (const change of valueObj) {
                lines.push(`${change.flag} ${key}: ${change.value}`);
            }
        } else {
            lines.push(`${valueObj.flag} ${key}: ${valueObj.value}`);
    }
}

  return `{\n  ${lines.join('\n  ')}\n}`;
}

const genDiff = (data1, data2) => {
    const keys1 = Object.keys(data1).sort();
    const keys2 = Object.keys(data2).sort();
    const keys = _.union(keys1, keys2);

    const result = {};
    for (const key of keys) {
        if (_.has(data1, key) !== _.has(data2, key)) {    
            if (_.has(data1, key)) {
                const newValue = data1[key];
                result[key] = {flag: '-', value: newValue}; 
            } else {
                const newValue = data2[key];
                result[key] = {flag: '+', value: newValue};
            }   
        }

        if (_.has(data1, key) === _.has(data2, key)) {
            if (data1[key] === data2[key]) {
                result[key] = {flag: ' ', value: data1[key]};
            } else {
                result[key] = [
                    {flag: '-', value: data1[key]},
                    {flag: '+', value: data2[key]}
                ];
            }
        }  
    }
    
    return format(result);
}

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
    console.log(data1)
    console.log(data2)
    const result = genDiff(data1, data2)
    console.log(result);

  });

program.parse(process.argv);



export default genDiff;