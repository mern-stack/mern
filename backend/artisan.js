const vorpal = require('vorpal')().show();

vorpal
  .command('make [controller]')
  .option('-b, --backwards')
  .option('-t, --twice')
  .action(function (args, callback) {
    let str = args.controller;
    if(str == 'controller'){
      
    }
    this.log(str);
    callback();
  });