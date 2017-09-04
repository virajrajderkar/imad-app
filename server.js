var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[article-one]));
});

var articles = { 
    '/article-one' :{
        title: 'article-one',
        head : 'nArticle One',
        p : 'hfdauishfhl vuwoih  uh huhu uhujh hu h'},
    '/article-two' :{
        title : 'Article-Two',
        head : 'Article Two',
        p : 'hfdauishfhl vuwoih  uh huhu uhujh hu h'},
    '/article-three' :{
        title : 'Article-Three',
        head : 'Article Three',
        p : 'hfdauishfhl vuwoih  uh huhu uhujh hu h'}
};

function createTemplate(data){
    var title = data.title;
    var head = data.head;
    var p = data.p;
    
    var htmlTemplate =
       ` <!doctype html>
        <html>
           
            <head>
                <link href="/ui/style.css" rel="stylesheet" />
                <title>$title</title>
               
            </head>
            <body>
                <h3>$head</h3>
               <p>$p</p>
            </body>
        </html>`;
}



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
