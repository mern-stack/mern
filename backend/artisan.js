#!/usr/bin/env node

/**
 * Module dependencies.
 */
var program = require('commander');


program
  .command('make:controller <name>')
  .alias('m:c')
  .description('Create a new contoller')
  .action((name) => {
        
  });