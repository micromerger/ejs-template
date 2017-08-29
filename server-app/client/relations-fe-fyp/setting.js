var ejs = require('ejs');
var model_schema = new Array();
var json_files = new Array();

var fs = require('fs');

const testFolder = '../../common/models/';
var list_templates = new Array();
var lb_relation = new Array();

fs.readdir(testFolder, (err, files) => {
  files.forEach(function (file) {
    if (file.split('.').pop() == 'json')
      json_files.push(file);
  });

  for (var i = 0; i < json_files.length; i++) {
    model_schema.push(require('../../common/models/' + json_files[i]));
  }
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

  //listing templates...
  fs.readdir('./template', (err, template) => {
    for (var i = 0; i < template.length; i++) {
        list_templates.push(fs.readFileSync('./template/' + template[i] , 'utf-8'));
      }

     for (var i = 0; i < template.length; i++) {
        list_templates.push(fs.readFileSync('./template/' + template[i] , 'utf-8'));
        renderer = ejs.render(list_templates[i], { 
          model_schema : model_schema,
          lb_relation : lb_relation
        });

        switch(template[i]){
          case 'html_temp.ejs' :         
            fs.writeFileSync('./templates/index.html', renderer, 'utf-8');
            break;
          case 'modal_svg_template.ejs':
            fs.writeFileSync('./scripts/modals-svg.js', renderer, 'utf-8');
            break;
          case 'index_js_template.ejs':
            fs.writeFileSync('./scripts/index.js', renderer, 'utf-8');
            break;
        }
      } //end of for loop...
  });
});
