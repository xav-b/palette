#!/usr/bin/env node

const chalk = require('chalk')
const prog = require('caporal')
const clipboardy = require('clipboardy')

const pkg = require('./package')
const ui = require('./src/ui')
// TODO would be so much better to import it from the official repository
// https://github.com/arcticicestudio/nord/blob/develop/src/nord.scss<Paste>
const nord = require('./src/nord')

// NOTE useful features:
// 	- copy the given id

prog
  .version(pkg.version)
  // you specify arguments using .argument()
  // 'app' is required, 'env' is optional
  .command('ls', 'Display palette colors')
  .argument('<style>', 'Palette to display', /^nord$/)
  .action((args, options, logger) => {
    // TODO support more theme and switch here
    ui.display(nord.palette)
  })
  .command('doc')
  .argument('<style>', 'Palette to display', /^nord$/)
  .action((args, options, logger) => {
    // TODO support more theme and switch here
    console.log(nord.url)
  })
  .command('cp')
  .argument('<color>', 'Copy color hex to clipboard')
  .action((args, options, logger) => {
    const nuance = nord.palette.find(x => x.name === args.color)
    if (nuance === undefined) {
      console.log(chalk.bold.red(`error: cannot find color ${args.color}`))
    } else {
      console.log(chalk.bold.green(`copying ${nuance.color} to clipboard`))
      clipboardy.writeSync(nuance.color)
    }
  })

prog.parse(process.argv)
