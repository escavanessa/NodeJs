const os = require('os')
const path = require('path')
const math = require('./math')
console.log(math.add(2, 3))

// you can also destructure. const { add } = require './math'
//console.log(add(2, 3)); this would work the same way as above.

// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// console.log(__dirname)
// console.log(__filename)

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// console.log(path.parse(__filename))
