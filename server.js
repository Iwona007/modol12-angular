const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/model12-angular'));
app.listen(process.env.PORT || 8080);

// ??PathLocationStrategy

app.get('/[^\.]+$', function (req, res) {
  res.set('Content-Type', 'text/html')
    .sendFile(path.join(__dirname + 'dist/model12-angular/index.html'));
});
app.listen(app.get('port'), function () {
  console.log('Console listening!' + app.get('port'));
});

//
// const express = require('express');
// const app = express();
// const path = require('path');
//
// app.use(express.static(__dirname + '/dist/model12-angular'));
//
// app.listen(process.env.PORT || 8080);
//
// // ??PathLocationStrategy
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, '/dist/model12-angular/index.html'));
// });
//
//
// console.log('Console listening!' + app.get('port'));
