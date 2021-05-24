var request = require('request');
require('dotenv').config()

var headers = {
    'Authorization': process.env.notion_auth,
    'Notion-Version': '2021-05-13'
};

var options = {
    url: process.env.dburl,
    headers: headers
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        var obj = JSON.parse(body);
        console.log(obj);
    }
}
request(options, callback);