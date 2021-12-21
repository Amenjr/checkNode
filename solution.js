var http = require('http')

http.createServer((req,res)=> res.write('<h1>Hi Im a server </h1> <br/> <h1>Hello world</h1>')).listen(2000)
