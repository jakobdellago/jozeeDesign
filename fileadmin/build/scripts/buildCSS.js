var sass = require('node-sass');
var fs = require('fs');

sass.render({
    file: 'scss/test.scss'
  }, function(error, result) {
    if(!error){
      fs.writeFile('../resources/css/main.css', result.css.toString(), function(err){
        if(err) console.log("writing error: " + err);
      });
    } else console.log("sass error: " + error);
  });