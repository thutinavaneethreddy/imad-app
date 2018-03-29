var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
    'article-one': {
        title: 'First Article',
        heading: 'First Article',
        date: 'Feb 13 2018',
        content: `<p>This page has been created just to explore more about creating more HTML
                    pages and linking them to URL's</p>
                    <p>This page has been created just to explore more about creating more HTML
                    pages and linking them to URL's</p>
                    <p>This page has been created just to explore more about creating more HTML
                    pages and linking them to URL's</p>
                    <p>This page has been created just to explore more about creating more HTML
                    pages and linking them to URL's</p>`
    },
    'article-two': {
        title: 'Second Article',
        heading: 'Second Article',
        date: 'Feb 13 2018',
        content: `<p>This page has been created just to explore more about creating more HTML
                    pages and linking them to URL's</p>
                    <p>This page has been created just to explore more about creating more HTML
                    pages and linking them to URL's</p>
                    <p>This page has been created just to explore more about creating more HTML
                    pages and linking them to URL's</p>
                    <p>This page has been created just to explore more about creating more HTML
                    pages and linking them to URL's</p>`
    },
    'article-three': {
        title: 'Third Article',
        heading: 'Third Article',
        date: 'Feb 13 2018',
        content: `<p>This page has been created just to explore more about creating more HTML
                    pages and linking them to URL's</p>
                    <p>This page has been created just to explore more about creating more HTML
                    pages and linking them to URL's</p>
                    <p>This page has been created just to explore more about creating more HTML
                    pages and linking them to URL's</p>
                    <p>This page has been created just to explore more about creating more HTML
                    pages and linking them to URL's</p>`
    },
};
function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `<!DOCTYPE html>
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <h1>${heading}</h1>
                </div>
                ${date}
                <hr/>
                <a href="/">Click here to go home</a>
                <hr/>
                <div>
                    ${content}
                </div>
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

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:articleName', function(req,res) {
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/main.js',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
