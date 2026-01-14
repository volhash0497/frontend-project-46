#!/usr/bin/env node
import { Command } from 'commander'
import getFile from '../src/parser.js'
import app from '../src/index.js'

const program = new Command()

const gendiff = program
  .name('gendiff')
  .description('CLI for files')
  .version('1.0.0')

gendiff
  .description(' Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((a, b, options) => {//)
    //const [data1, data2] = getFile(filepath1, filepath2)
    //const result = app(data1, data2)
    console.log(app(a, b, options))
  })

program.parse(process.argv)
