const vorpal = require('vorpal')().show();
const fs = require('fs');
const replace = require('replace-in-file');

vorpal
  .command('make:controller [controller]')
  .action(function (args, callback) {
    let str = args.controller;
      fs.appendFile('./app/http/controllers/'+str+'.js', "exports.page = (req, res)=>{return res.json('hello'); }", function (err) {
        if (err) throw err;
        console.log(`Controller ${str} Created Successfully`);
      });
      // register controller
      fs.appendFile('./app/providers/controllerProvider.js', `main.${str}=require('../http/controllers/${str}');`, function (err) {
        if (err) throw err;
      });
      const options = {
        files: './app/providers/controllerProvider.js',
        from: 'module.exports = main;',
        to: ''
      };
      replace(options)
        .then(changedFiles => {
          fs.appendFile('./app/providers/controllerProvider.js', '\n\n\nmodule.exports = main;', function (err) {
            if (err) throw err;
            console.log(`Controller ${str} Added To Provider Successfully`);
          });
        })
        .catch(error => {
          console.error('Error occurred:', error);
        });
    callback();
  });

  vorpal
  .command('make:model [model]')
  .action(function (args, callback) {
    let feedback = args.model;
    let str = feedback.replace(/^\w/, c => c.toUpperCase());
      fs.appendFile('./database/migrations/create_'+str+'_model.js', "module.exports ={}", function (err) {
        if (err) throw err;
        console.log(`migration created successfully`);
      });
      fs.appendFile('./app/models/'+str+'.js', `const mongoose = require('mongoose');\nconst ${str}Object = require('../../database/migrations/create_${str}_model') \n\nconst ${str} = mongoose.model('${str}', new mongoose.Schema(${str}Object));\n\n\nmodule.exports = ${str}
      `, function (err) {
        if (err) throw err;
      });
    callback();
  });