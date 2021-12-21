var http = require('http')
var url = process.argv[2]
var body = ''

http.get(url, (res)=> {
  res.on('data',  (chunk)=> { 
    body += chunk
  })
  res.on('end', function () {
    console.log(body.length)
    console.log(body)
  })
})