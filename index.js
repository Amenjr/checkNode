filename = 'myFile.txt'
extension = filename.split('.').pop();
console.log(extension)
var path = require('path')
console.log(path.extname('myFile.txt'))
var fs = require('fs')


var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function(file) {
      if (path.extname(file) === ext) {
          console.log(file)
      }
  })
})
console.log(process.argv)