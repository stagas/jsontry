var json = require('./jsontry')

console.log(json.parse(JSON.stringify({ a: 'json', object: true })))
console.log(json.parse('plain text'))
console.log({ an: 'object' })