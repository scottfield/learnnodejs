const fs = require('fs');
const content = fs.readFile(process.argv[2],'utf8',function(error,data){
   if(error){
   	console.log(error);
   }
   const lines = data.split('\n').length-1;
   console.log(lines);
});