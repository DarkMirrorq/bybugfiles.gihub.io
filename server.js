const express = require('express');
const app = express();
const auth = require('basic-auth');

const users = {
  'admin': 'password'
};

app.get('/', function (req, res) {
  const user = auth(req);
  if (!user || user.name !== 'admin' || user.pass !== 'password') {
    res.statusCode = 401;
    res.setHeader('WWW-Authenticate', 'Basic realm="example"');
    res.end('Access denied');
  } else {
    res.end('Access granted');
  }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
