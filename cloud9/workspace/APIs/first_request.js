/*
var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
*/

var request = require('request');
var url = "https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"

request(url, function(error, response, body) {
   if (!error && response.statusCode == 200) {
       // THINGS WORKED
       var parsedData = JSON.parse(body);
       var sunset = parsedData["query"]["results"]["channel"]["astronomy"]["sunset"];
       console.log("Sunset in Hawaii is at " +  sunset);
   }
});