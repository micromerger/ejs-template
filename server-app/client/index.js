var ejs = require('ejs');
var app = require('../server/server.js');
var templates = new Array();
var model_schema = new Array();
var json_files = new Array();
var app_templates = new Array();
var app_temp_names = new Array();
var e2e_templates = new Array();
var e2e_temp_names = new Array();
var cli_templates = new Array();
var cli_temp_names = new Array();
var path = require('path');
var mkdirp = require('mkdirp');
var fs = require('fs');

var model, template_folder = './Component-Templates/';
const testFolder = '../common/models/';


fs.readdir(testFolder, (err, files) => {
    files.forEach(function(file) {
        if (file.split('.').pop() == 'json')
            json_files.push(file);
    });


    for (var i = 0; i < json_files.length; i++) {
        model_schema.push(require('../common/models/' + json_files[i]));
    }


    fs.readdir(template_folder, (err, temp) => {
        mkdirp('./ng2app/e2e', function(err) {
            if (err) console.error(err)
        });
        mkdirp('./ng2app/src/assets', function(err) {
            if (err) console.error(err)
        });
        mkdirp('./ng2app/src/enviroments', function(err) {
            if (err) console.error(err)
        });
        for (var i = 0; i < temp.length; i++) {
            templates.push(fs.readFileSync('./Component-Templates/' + temp[i], 'utf-8'));
        }

        for (var count = 0; count < model_schema.length; count++) {
            model = model_schema[count];
            model.name = model.name.charAt(0).toUpperCase() + model.name.slice(1);

            var dir = path.join('./ng2app/src/app/myComponents/' + model.name + 'Component');

            mkdirp.sync(dir, function(err) {
                if (err)
                    console.log(err);
            }); //end of mkdirp...


            for (var i = 0; i < temp.length; i++) {
                html = ejs.render(templates[i], {
                    model: model
                });

                switch (temp[i]) {
                    case 'css-template.ejs':
                        fs.writeFileSync(dir + '/' + model.name + '.component.css', html, 'utf-8')
                        break;

                    case 'simple-html.ejs':
                        fs.writeFileSync(dir + '/' + model.name + '.component.html', html, 'utf-8')
                        break;

                    case 'spec.ts-template.ejs':
                        fs.writeFileSync(dir + '/' + model.name + '.component.spec.ts', html, 'utf-8')
                        break;

                    case 'ts-template.ejs':
                        fs.writeFileSync(dir + '/' + model.name + '.component.ts', html, 'utf-8')
                        break;
                } //end of switch...
            } //end of for loop...
        } //end of for loop...


        // setting files created e.g. module.ts,routing.ts etc...
        //read app-template folder...
        // ----------------------------------------------------------------------------------------------------------------------------------------------------------

        fs.readdir('./app-Templates', (err, files) => {
            files.forEach(function(file) {
                app_temp_names.push(file);
                app_templates.push(fs.readFileSync('./app-Templates/' + file, 'utf-8'));
            });

            for (var count = 0; count < app_templates.length; count++) {
                html = ejs.render(app_templates[count], {
                    model_schema: model_schema
                });
                switch (app_temp_names[count]) {
                    case 'app_html_template.ejs':
                        fs.writeFileSync('./ng2app/src/app/app.component.html', html, 'utf-8')
                        break;

                    case 'app_module_template.ejs':
                        fs.writeFileSync('./ng2app/src/app/app.module.ts', html, 'utf-8')
                        break;

                    case 'app_spec_template.ejs':
                        fs.writeFileSync('./ng2app/src/app/app.component.spec.ts', html, 'utf-8')
                        break;

                    case 'app_ts_template.ejs':
                        fs.writeFileSync('./ng2app/src/app/app.component.ts', html, 'utf-8')
                        break;

                    case 'routing_template.ejs':
                        fs.writeFileSync('./ng2app/src/app/app.routing.ts', html, 'utf-8')
                        break;
                } //end of switch...
            } // end of for...
        }); //end of fs.readdir... reading app-Templates

        // ----------------------------------------------------------------------------------------------------------------------------------------------------------

        // Creating files of e2e for angular-cli 
        //read e2e-template folder...
        // ----------------------------------------------------------------------------------------------------------------------------------------------------------

        fs.readdir('./e2e-Templates', (err, files) => {
            files.forEach(function(file) {
                e2e_temp_names.push(file);
                e2e_templates.push(fs.readFileSync('./e2e-Templates/' + file, 'utf-8'));
            });

            for (var count1 = 0; count1 < e2e_templates.length; count1++) {
                html = ejs.render(e2e_templates[count1], {
                    model_schema: model_schema
                });
                switch (e2e_temp_names[count1]) {
                    case 'app.e2e.spec.ts-template.ejs':
                        fs.writeFileSync('./ng2app/e2e/app.e2e.spec.ts', html, 'utf-8')
                        break;

                    case 'app.poo.ts-template.ejs':
                        fs.writeFileSync('./ng2app/e2e/app.poo.ts', html, 'utf-8')
                        break;

                    case 'tsconfig.e2e.json-template.ejs':
                        fs.writeFileSync('./ng2app/e2e/tsconfig.e2e.json', html, 'utf-8')
                        break;

                } //end of switch...
            } // end of for...
        }); //end of fs.readdir... reading e2e-Templates

        // ----------------------------------------------------------------------------------------------------------------------------------------------------------

        // Creating files for angular-cli 
        //read cli-template folder...
        // ----------------------------------------------------------------------------------------------------------------------------------------------------------

        fs.readdir('./cli-Templates', (err, files) => {
            files.forEach(function(file) {
                cli_temp_names.push(file);
                cli_templates.push(fs.readFileSync('./cli-Templates/' + file, 'utf-8'));
            });

            for (var count2 = 0; count2 < cli_templates.length; count2++) {
                html = ejs.render(cli_templates[count2], {
                    model_schema: model_schema
                });
                switch (cli_temp_names[count2]) {
                    case '.editorconfig-template.ejs':
                        fs.writeFileSync('./ng2app/.editorconfig', html, 'utf-8')
                        break;

                    case '.gitignore-template.ejs':
                        fs.writeFileSync('./ng2app/.gitignore', html, 'utf-8')
                        break;

                    case 'angular-cli.json-template.ejs':
                        fs.writeFileSync('./ng2app/angular-cli.json', html, 'utf-8')
                        break;

                    case 'karma.conf.js-template.ejs':
                        fs.writeFileSync('./ng2app/karma.conf.js', html, 'utf-8')
                        break;

                    case 'package.json-template.ejs':
                        fs.writeFileSync('./ng2app/package.json', html, 'utf-8')
                        break;

                    case 'protractor.conf.js-template.ejs':
                        fs.writeFileSync('./ng2app/protractor.conf.js', html, 'utf-8')
                        break;

                    case 'readme.md-template.ejs':
                        fs.writeFileSync('./ng2app/README1.md', html, 'utf-8')
                        break;

                    case 'tsconfig.json-template.ejs':
                        fs.writeFileSync('./ng2app/tsconfig.json', html, 'utf-8')
                        break;

                    case 'tslint.json-template.ejs':
                        fs.writeFileSync('./ng2app/tslint.json', html, 'utf-8')
                        break;
                } //end of switch...
            } // end of for...
        }); //end of fs.readdir... reading cli-Templates

        // ----------------------------------------------------------------------------------------------------------------------------------------------------------


    }); //fs.readfile(template files read from components_templates)...

}); //fs.readfile(JSON files read from model.json)...