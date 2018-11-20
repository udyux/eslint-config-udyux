const fs = require('fs-extra')
const { resolve } = require('path')

const { rules } = require('./eslint.rules.json')
const { rules: extensions } = require('./eslint.extensions.json')

const compress = (data) =>
  JSON.stringify(data)
    .replace(/\s/, '')
    .replace(/"error"/, 2)
    .replace(/"warn"/, 1)

const isMatch = (ours, theirs) => compress(ours) === compress(theirs)

const analysis = Object.keys(rules).reduce(
  (results, rule) => {
    const ours = rules[rule]
    const theirs = extensions[rule]

    if (!theirs) return results

    if (isMatch(ours, theirs)) {
      results.matches.push(rule)
      return results
    }

    results.conflicts[rule] = { ours, theirs }
    return results
  },
  { conflicts: {}, matches: [] }
)

analysis.additional = Object.keys(extensions).filter((rule) => !rules[rule] && !/\//.test(rule))

fs.outputJSON(resolve(__dirname, 'results.json'), analysis, { spaces: 2 })
  .then(() => {
    console.log('done')
    console.log(Object.keys(analysis.conflicts).length, 'conflicts')
    console.log(analysis.matches.length, 'matches')
    console.log(analysis.additional.length, 'additional rules')
  })
  .catch((err) => console.log(err))
