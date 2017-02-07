var express = require('express')
  , logger = require('morgan')
  , app = express()

app.use(logger('dev'))
app.use(express.static(__dirname + '/static'))

app.get('/', function (req, res, next) {
  try {
   var template = require('jade').compileFile(__dirname + '/source/templates/home.jade')
    var html = template({ title: 'Home' })
    res.send(html)
  } catch (e) {
    next(e)
  }
});

app.get('/news', function (req, res, next) {
  try {
   var template = require('jade').compileFile(__dirname + '/source/templates/news.jade')
    var html = template({ title: 'News' })
    res.send(html)
  } catch (e) {
    next(e)
  }
});

app.get('/about', function (req, res, next) {
  try {
   var template = require('jade').compileFile(__dirname + '/source/templates/about.jade')
    var html = template({ title: 'About' })
    res.send(html)
  } catch (e) {
    next(e)
  }
});

app.get('/contact', function (req, res, next) {
  try {
   var template = require('jade').compileFile(__dirname + '/source/templates/contact.jade')
    var html = template({ title: 'Contact' })
    res.send(html)
  } catch (e) {
    next(e)
  }
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})
