import express = require('express');
import path = require('path');
import open = require('open');

const port:number = 3000;
const app = express();
//Express.Response typings don't seem to recognize sendFile
app.get('/', function(req :Express.Request, res: any){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err : any){
  if(err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
})
