#!/usr/bin/env node

const chalk = require('chalk')
const prog = require('caporal')

// NOTE useful features:
// 	- copy the given id

const WIDTH = '     '
const nordDoc = 'https://arcticicestudio.github.io/nord/'

// TODO would be so much better to import it from the official repository
// https://github.com/arcticicestudio/nord/blob/develop/src/nord.scss<Paste>
const NORD_THEME = [
  // Polar Night: Lighter shade color of the base component color.
  { group: 'Polar Night', name: 'nord0', color: '#2e3440', description: 'Base component color of "Polar Night".' },
  { group: 'Polar Night', name: 'nord1', color: '#3b4252', description: 'Lighter shade color of the base component color.' },
  { group: 'Polar Night', name: 'nord2', color: '#434c5e', description: 'Lighter shade color of the base component color.' },
  { group: 'Polar Night', name: 'nord3', color: '#4c566a', description: 'Lighter shade color of the base component color.' },

  { group: 'Snow Storm', name: 'nord4', color: '#d8dee9', description: 'Base component color of "Snow Storm".' },
  { group: 'Snow Storm', name: 'nord5', color: '#e5e9f0', description: 'Lighter shade color of the base component color.' },
  { group: 'Snow Storm', name: 'nord6', color: '#eceff4', description: 'Lighter shade color of the base component color.' },

  { group: 'Frost', name: 'nord7', color: '#8fbcbb', description: 'Bluish core color.' },
  { group: 'Frost', name: 'nord8', color: '#88c0d0', description: 'Bluish core accent color.' },
  { group: 'Frost', name: 'nord9', color: '#81a1c1', description: 'Bluish core color.' },
  { group: 'Frost', name: 'nord10', color: '#5e81ac', description: 'Bluish core color.' },

  { group: 'Aurora', name: 'nord11', color: '#bf616a', description: 'Colorful component color.' },
  { group: 'Aurora', name: 'nord12', color: '#d08770', description: 'Colorful component color.' },
  { group: 'Aurora', name: 'nord13', color: '#ebcb8b', description: 'Colorful component color.' },
  { group: 'Aurora', name: 'nord14', color: '#a3be8c', description: 'Colorful component color.' },
  { group: 'Aurora', name: 'nord15', color: '#b48ead', description: 'Colorful component color.' },
]

const printLine = (name, color, description) => {
  const escapeSeq = chalk.bgHex(color).bold(WIDTH)
  const prettyName = chalk.blue.bold(name)
	const more = chalk.gray(color)
	const text = chalk.white(description)

  console.log(`${prettyName}\t${escapeSeq}\t${more}\t\t${text}`)
}

function display(palette) {
	let currentGroup = null

	palette.forEach(variation => {
		if (currentGroup !== variation.group) {
			currentGroup = variation.group	
			let section = chalk.yellow.bold.underline(currentGroup)
			console.log(`\n${section}\n`)
		}
		printLine(variation.name, variation.color, variation.description)
	})
}

prog
  .version('0.1.0')
  // you specify arguments using .argument()
  // 'app' is required, 'env' is optional
  .command('ls', 'Display palette colors')
  .argument('<style>', 'Palette to display', /^nord$/)
  .action((args, options, logger) => {
    // TODO support more theme and switch here
    display(NORD_THEME)
  })
  .command('doc')
  .argument('<style>', 'Palette to display', /^nord$/)
  .action((args, options, logger) => {
    // TODO support more theme and switch here
    console.log(nordDoc)
  })

prog.parse(process.argv)
