'use strict';

const http = require('http');

// The URL I get as the FIRST command line argument
const url = process.argv[2];

http.get(url, function(response) {
    response.setEncoding("utf8");
    response.on('data', function (data) {
        console.log(data);
    })
})