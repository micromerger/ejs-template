var ejs = require('ejs');
var app = require('../server/server.js');
var templates = new Array();
var model_schema = new Array();
var json_files = new Array();
var path = require('path');
const mkdirp = require('mkdirp');


var model, template_folder = './Component-Templates/';
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

    fs.readdir(template_folder, (err, temp) => {
        for (var i = 0; i < temp.length; i++) {
            templates.push(fs.readFileSync('./Component-Templates/' + temp[i], 'utf-8'));
        }
        for (var count = 0; count < model_schema.length; count++) {
            model = model_schema[count];
            model.name = model.name.charAt(0).toUpperCase() + model.name.slice(1);
            var dir = path.join('./app/src/' + model.name);

            mkdirp.sync(dir, function(err) {
                if (err)
                    console.log(err);
            }); //end of mkdirp...


            for (var i = 0; i < temp.length; i++) {
                html = ejs.render(templates[i], { model: model });
                switch (temp[i]) {
                    case 'css-template.ejs':
                        fs.writeFileSync(dir + '/' + model.name + '.component' + '.css', html, 'utf-8')
                        break;

                    case 'simple-html.ejs':
                        fs.writeFileSync(dir + '/' + model.name + '.component' + '.html', html, 'utf-8')
                        break;

                    case 'spec.ts-template.ejs':
                        fs.writeFileSync(dir + '/' + model.name + '.component' + '.spec.ts', html, 'utf-8')
                        break;

                    case 'ts-template.ejs':
                        fs.writeFileSync(dir + '/' + model.name + '.component' + '.ts', html, 'utf-8')
                        break;
                } //end of switch...
            } //end of for loop...
        } //end of for loop...

    });

}); //fs.readfile...