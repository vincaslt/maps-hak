const fs = require('fs')
const data = require('./colorData.json')

function resolveColor(colors) {
  const greenCount = colors.filter(color => color === 'Green').length
  const yellowCount = colors.filter(color => color === 'Yellow').length
  const redCount = colors.filter(color => color === 'Red').length
  return (greenCount * 120 + yellowCount * 60) / (greenCount + yellowCount + redCount)
}

const arr = data.map(({ name, colors }) => ({
  name,
  color: resolveColor(colors)
}))

const output = arr.reduce((obj, entry) => ({ ...obj, [entry.name]: entry.color }), {})

fs.writeFileSync('output.json', JSON.stringify(output))
console.log(output)