var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'Services':{ title:'Services',

     content:
   ` <p>
    This is My blog.This is My blog.This is My blog.This is My blog.
    </p>
    <p>
    This is My blog.This is My blog.This is My blog.This is My blog.
    </p>`
    }
    
};
var htmlTemplate=`<html>
<head>
<style>
services
</style>
</head>
<body>
<div>
<a href='\'>Home </a>
</div>
<div>
<p>
    This is My blog.This is My blog.This is My blog.This is My blog.
    </p>
 
   <p>
    This is My blog.This is My blog.This is My blog.This is My blog.
    </p>
</div>
</body>
</html>`





app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/download.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'blog.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
