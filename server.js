// var express = require('express');
//
// //Create our app
// var app = express();
//
// app.use(express.static('public'));
// app.listen(3999, function () {
//     console.log('Express server is up on port 3000');
// });

const express = require('express');
const path = require('path');
const port = process.env.PORT || 3999;
const app = express();


// serve static assets normally
app.use(express.static(__dirname + '/public'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(port)
console.log("server started on port " + port)