const Mult=require('./produit');
console.log('hello World');
console.log('//////////////////////')
//console.log(process.argv);
const sum=(a,b)=>a+b;
//console.log(sum(process.argv[2]*1,process.argv[3]*1));
//console.log(Mult(2,6))
var result = 1

for (var i = 2; i < process.argv.length; i++)
  result =result * Number(process.argv[i])

console.log(result)
console.log(Mult(23,4))
const fs=require('fs');
var contents = fs.readFileSync('./myFile.txt',"UTF-8",(err,data)=>{
  if(err) console.log(err)
  else console.log(data)
}
)  
var lines = contents.toString().split('\n').length   

console.log(contents)
console.log("le nombre des linge est : "+lines)
//////////////////////////////





