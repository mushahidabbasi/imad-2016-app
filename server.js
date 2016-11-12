var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'About':{ title:'About',

     content:
   ` <p>
    This is My blog.This is My blog.This is My blog.This is My blog.
    </p>
    <p>
    This is My blog.This is My blog.This is My blog.This is My blog.
    </p>`
    },
    'Products':{title:'Products',
    content:
    `<p>
    <li>Blog1 </li>
    <li>
    Blog2
    </li>
    <li>
    Blog3
    </li>
    <p>`
    },
    'Register':{title:'Register',
    content:
    `
<p>
<form>
                <h1>Create Logon</h1>
                <div class="line"><label for="username">Username *: </label><input type="text" id="username" /></div>
                <div class="line"><label for="pwd">Password *: </label><input type="password" id="pwd" /></div>
                
                <div class="line"><label for="surname">Surname *: </label><input type="text" id="surname" /></div>
                <div class="line"><label for="other_names">Other Names *: </label><input type="text" id="names" /></div>
                <div class="line"><label for="dob">Date of Birth *: </label><input type="text" id="dob" /></div>
                <div class="line"><label for="email">Email *: </label><input type="email" id="email" /></div>
               
                <div class="line"><label for="tel">Telephone: </label><input type="text" id="tel" /></div>
                <div class="line"><label for="add">Address *: </label><input type="text" id="add" /></div>
                <div class="line"><label for="ptc">Post Code *: </label><input type="text" id="ptc" /></div>
                <div class="line submit"><input type="submit" value="Submit" /></div>
 
                <p>Note: Please make sure your details are correct before submitting form and that all fields marked with * are completed!.</p>
            </form>
    
};
function createTemplate(data) {
    var title=data.title;
    var content=data.content;
var htmlTemplate=`<html>
<head>
<style>
${title}
</style>
</head>
<body>
<div>
<a href='\'>Home </a>
</div>
<div>
${content}
</div>
</body>
</html>`;
return htmlTemplate;

}



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

app.get('/:articleName',function(req,res){
var articleName=req.params.articleName;
res.send(createTemplate(articles[articleName]));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
