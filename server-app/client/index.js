var ejs = require('ejs');
var app = require('../server/server.js');
var inquirer = require('inquirer');
var templates = new Array();
var list_templates = new Array();
var model_schema = new Array();
var json_files = new Array();
var app_templates = new Array();
var app_temp_names = new Array();
var e2e_templates = new Array();
var e2e_temp_names = new Array();
var cli_templates = new Array();
var cli_temp_names = new Array();
var inquirer = require('inquirer');

var lb_relation = new Array();
var relation_data;

var path = require('path');
var mkdirp = require('mkdirp');
var fs = require('fs');

var model, template_folder = './Component-Templates/',
    listing_templates = './Component-Listing-Templates';
const testFolder = '../common/models/';


fs.readdir(testFolder, (err, files) => {
    files.forEach(function(file) {
        if (file.split('.').pop() == 'json')
            json_files.push(file);
    });

    for (var i = 0; i < json_files.length; i++) {
        model_schema.push(require('../common/models/' + json_files[i]));
    }
    // console.log(model_schema);
    //handle loopback:Relations
    //----------------------------------------------------------------------------------------------------------------------------------------------------------
    var relation_name;
    for (var count = 0; count < model_schema.length; count++) {
        if (Object.keys(model_schema[count].relations).length > 0) {
            relation_name = Object.keys(model_schema[count].relations);
            for (var i = 0; i < relation_name.length; i++) {
                lb_relation.push({
                    "name": model_schema[count].name,
                    "relation_name": relation_name[i],
                    "relations": model_schema[count].relations[relation_name[i]]
                });
            }
        }
    }
    //create question object for prompting properties...
    // for (var check = 0 ; check  < prop.length ; check++){

    // }

    // console.log(lb_relation);
    // loopback relations
    //-----------------------------------------------------------------------------------------------------------------------------------------------------------
    fs.readdir(template_folder, (err, temp) => {
        mkdirp.sync('./ng2app/e2e', function(err) {
            if (err) console.error(err)
        });
        mkdirp.sync('./ng2app/src/assets', function(err) {
            if (err) console.error(err)
        });
        mkdirp.sync('./ng2app/src/environments', function(err) {
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
                    model: model,
                    lb_relation: lb_relation,
                    model_schema: model_schema
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


        //listing templates...
        fs.readdir(listing_templates, (err, temp) => {

            for (var count = 0; count < model_schema.length; count++) {
                model = model_schema[count];
                model.name = model.name.charAt(0).toUpperCase() + model.name.slice(1);
                var listingDir = path.join('./ng2app/src/app/myComponents/' + model.name + 'ListingComponent');

                mkdirp.sync(listingDir, function(err) {
                    if (err)
                        console.log(err);
                }); //end of mkdirp...

                for (var i = 0; i < temp.length; i++) {
                    list_templates.push(fs.readFileSync('./Component-Listing-Templates/' + temp[i], 'utf-8'));
                }
                for (var i = 0; i < temp.length; i++) {

                    html = ejs.render(list_templates[i], {
                        model: model,
                        lb_relation: lb_relation,
                        model_schema: model_schema
                    });

                    switch (temp[i]) {
                        case 'css-listing-template.ejs':
                            fs.writeFileSync(listingDir + '/' + model.name + '.listing.component.css', html, 'utf-8')
                            break;

                        case 'simple-listing-html.ejs':
                            fs.writeFileSync(listingDir + '/' + model.name + '.listing.component.html', html, 'utf-8')
                            break;

                        case 'spec.ts-listing-template.ejs':
                            fs.writeFileSync(listingDir + '/' + model.name + '.listing.component.spec.ts', html, 'utf-8')
                            break;

                        case 'ts-listing-template.ejs':
                            fs.writeFileSync(listingDir + '/' + model.name + '.listing.component.ts', html, 'utf-8')
                            break;
                    } //end of switch...
                } //end of for loop...
            } //end of for loop...
        }); //end of listing templates...


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
                    model_schema: model_schema,
                    lb_relation: lb_relation
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
                    case 'app_html_template.ejs':
                        fs.writeFileSync('./ng2app/src/app/app.component.html', html, 'utf-8')
                        break;

                    case 'index.html-template.ejs':
                        fs.writeFileSync('./ng2app/src/index.html', html, 'utf-8')
                        break;

                    case 'main.ts-template.ejs':
                        fs.writeFileSync('./ng2app/src/main.ts', html, 'utf-8')
                        break;

                    case 'polyfills.ts-template.ejs':
                        fs.writeFileSync('./ng2app/src/polyfills.ts', html, 'utf-8')
                        break;

                    case 'styles.css-template.ejs':
                        fs.writeFileSync('./ng2app/src/styles.css', html, 'utf-8')
                        break;

                    case 'test.ts-template.ejs':
                        fs.writeFileSync('./ng2app/src/test.ts', html, 'utf-8')
                        break;

                    case 'tsconfig.app.json-template.ejs':
                        fs.writeFileSync('./ng2app/src/tsconfig.app.json', html, 'utf-8')
                        break;

                    case 'tsconfig.spec.json-template.ejs':
                        fs.writeFileSync('./ng2app/src/tsconfig.spec.json', html, 'utf-8')
                        break;

                    case 'typings.d.ts-template.ejs':
                        fs.writeFileSync('./ng2app/src/typings.d.ts', html, 'utf-8')
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
                    case 'app.e2e-spec.ts-template.ejs':
                        fs.writeFileSync('./ng2app/e2e/app.e2e-spec.ts', html, 'utf-8')
                        break;

                    case 'app.po.ts-template.ejs':
                        fs.writeFileSync('./ng2app/e2e/app.po.ts', html, 'utf-8')
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

                    case 'environment.prod.ts-template.ejs':
                        fs.writeFileSync('./ng2app/src/environments/environment.prod.ts', html, 'utf-8')
                        break;

                    case 'environment.ts-template.ejs':
                        fs.writeFileSync('./ng2app/src/environments/environment.ts', html, 'utf-8')
                        break;
                } //end of switch...
            } // end of for...
        }); //end of fs.readdir... reading cli-Templates

        // ----------------------------------------------------------------------------------------------------------------------------------------------------------
    }); //fs.readfile(template files read from components_templates)...

}); //fs.readfile(JSON files read from model.json)...