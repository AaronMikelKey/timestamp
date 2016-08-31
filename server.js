var express=require("express");
var time = require("strftime");
var app = express();


app.get('/:input', function (req, res) {
  //Need some logic here to determine input type eg(Jan,1,2000 or UnixEpochTime)
  var re = /^\w*(January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Oct|Nov|Dec),\d{1,2},\d{2,4}/gi;
  var re2 = /^\d{1,10}$/;
  var date = req.params.input;
  
  if (date.match(re)) {
    var timestamp = time('{ \n Date: %A, %B %d, %Y \n UnixEpochTime: %s \n }', new Date(date));
    res.send(timestamp);
  } else if (date.match(re2)) {
    var date2 = new Date(0);
    date2.setSeconds(date);
    var timestamp = time('{ \n Date: %A, %B %d, %Y \n UnixEpochTime: %s \n }', new Date(date2));
    res.send(timestamp);
  }else {
    res.send('{ Date: null UnixEpochTime: null }');
  }
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});