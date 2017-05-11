// var ejs = require('ejs');
    // var app = require('../server/server.js');
//     var model_schema = new Array();
// var json_files = new Array();
// const testFolder = '../common/models/';
// const fs = require('fs');
// fs.readdir(testFolder, (err, files) => {
//   files.forEach(function(file) {
//       if ( file.split('.').pop() == 'json')
//       json_files.push(file);
//   });
//   for (var i=0 ;i<json_files.length; i++){
//     model_schema.push(require('../common/models/' + json_files[i]));
// }
//  console.log(model_schema)
// });
var ejs = require('ejs');
var fs = require('fs');
 var abc = require('../common/models/items.json');
var temp = fs.readFileSync('./index.ejs' , 'utf-8');
console.log(abc)
     html = ejs.render(temp,{abc : abc});
console.log(html);

fs.writeFileSync('index2.html',html , 'utf-8')