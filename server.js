var request = require("request");
var app = require("express")();
var server = require("http").Server(app);

var config = require('config');
var Twitter = require('twit');

var fullContact = config.get('fullContact.apiKey');
var twitter = new Twitter({
  consumer_key: config.get('twitter.consumer_key'),
  consumer_secret: config.get('twitter.consumer_secret'),
  access_token: config.get('twitter.access_token'),
  access_token_secret: config.get('twitter.access_token_secret')
});

app.get("/tweet/:id", function(req, res) {
  twitter.get('statuses/lookup', { id: req.params.id })
    .then(function(result) {
      res.send(result.data);
    })
    .catch(function(err) {
      console.error(err);
    });
});

app.get("/contact/:handle", function(req, res){
  var options = { method: 'GET',
    url: 'https://api.fullcontact.com/v2/person.json',
    qs: { twitter: req.params.handle },
    headers:
     { 'postman-token': '2e0b0608-dc9f-8460-2661-d62dcbe133a3',
       'cache-control': 'no-cache',
       'x-fullcontact-apikey': fullContact } };

    request(options, function (error, response, body) {
    if (error) throw new Error(error);

    res.send(body);
  });
});



server.listen(8888);
