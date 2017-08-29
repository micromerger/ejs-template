var ejs = require('ejs');
var app = require('../server/server.js');
var path = require('path');
var mkdirp = require('mkdirp');
var fs = require('fs');

var html_template = new Array();
var js_template = new Array();
var style_template = new Array();
mkdirp.sync('./JsHtml/templates', function(err) {
    if (err) console.error(err)
});
mkdirp.sync('./JsHtml/scripts', function(err) {
    if (err) console.error(err)
});
mkdirp.sync('./JsHtml/style', function(err) {
    if (err) console.error(err)
});

fs.readdir('./html-templates', (err, files) => {
    files.forEach(function(file) {
        html_template.push(file);
    });
    for (var count = 0; count < html_template.length; count++) {
        html = ejs.render(html_template[count], {

        });
        switch (html_template[count]) {
            case 'index.html.ejs':
                fs.writeFileSync('./JsHtml/templates/index.html', html, 'utf-8')
                break;
            case 'package.json.ejs':
                fs.writeFileSync('./JsHtml/package.json', html, 'utf-8')
                break;
        } //end of switch...
    }

});
fs.readdir('./js-templates', (err, files) => {
    files.forEach(function(file) {
        js_template.push(file);
    });
    for (var count = 0; count < js_template.length; count++) {
        html = ejs.render(js_template[count], {

        });
        switch (js_template[count]) {
            case 'index.js.ejs':
                fs.writeFileSync('./JsHtml/scripts/index.js', html, 'utf-8')
                break;
            case 'jquery.bubble.js.ejs':
                fs.writeFileSync('./JsHtml/scripts/jquery.bubble.js', html, 'utf-8')
                break;
        } //end of switch...
    }

});
fs.readdir('./style-templates', (err, files) => {
    files.forEach(function(file) {
        style_template.push(file);
    });
    for (var count = 0; count < style_template.length; count++) {
        html = ejs.render(style_template[count], {

        });
        switch (style_template[count]) {
            case 'index.css.ejs':
                fs.writeFileSync('./JsHtml/style/index.css', html, 'utf-8')
                break;
        } //end of switch...
    }

});