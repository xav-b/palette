const chalk = require('chalk')

const WIDTH = '     '

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

module.exports = { display }
