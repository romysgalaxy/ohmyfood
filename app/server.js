'use strict';

const express = require('express');
const fs = require('fs');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  fs.readFile('home-page.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  })
});

app.get('/la-palette-du-gout', (req, res) => {
  fs.readFile('la-palette-du-gout.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  })
});

app.get('/a-la-francaise', (req, res) => {
  fs.readFile('a-la-francaise.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  })
});

app.get('/la-note-enchantee', (req, res) => {
  fs.readFile('la-note-enchantee.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  })
});

app.get('/le-delice-des-sens', (req, res) => {
  fs.readFile('le-delice-des-sens.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  })
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`); 