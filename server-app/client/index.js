var ejs = require('ejs');
var mkdirp = require('mkdirp');
var app = require('../server/server.js');
var model_schema = new Array();
var json_files = new Array();
var Template_data = new Array();
var Template_files = new Array();
const testFolder = '../common/models/';
const fs = require('fs');
fs.readdir(testFolder, (err, files) => {
    files.forEach(function(file) {
        if (file.split('.').pop() == 'json')
            json_files.push(file);
    });
    for (var i = 0; i < json_files.length; i++) {
        model_schema.push(require('../common/models/' + json_files[i]));
    }
    //   console.log(model_schema)
    var model, temp;
    for (var count = 0; count < model_schema.length; count++) {
        for (var j = 0; j < Template_files.length; j++) {
            temp = Template_files[j];
            model = model_schema[count];

            console.log(model.name.toUpperCase());
            // model.name[0] = (model.name[0]).toUpperCase();]
            model.name = model.name.charAt(0).toUpperCase() + model.name.slice(1);
            html = ejs.render(temp, { model: model });
            var dir = './app/src/' + model.name;
            mkdirp(dir, function(err) {
                if (err)
                    console.log(err);
            });
            fs.writeFileSync(dir + '/' + model.name + '.spec.ts', html, 'utf-8');
        }

    }
});

//  var abc = require('../common/models/items.json');
// var temp = fs.readFileSync('./modelTemplate.ejs' , 'utf-8');
// console.log(abc)
//  html = ejs.render(temp,{temp : abc});
// console.log(html);
// console.log(temp , model[0].name+'.html');

// fs.writeFileSync(model[0].name+'.html', html, 'utf-8')