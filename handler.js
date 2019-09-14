/**
 * handler.js
 *
 * @author nxxinf
 * @github https://github.com/fangnx
 * @created 2019-09-12 12:58:17
 * @last-modified 2019-09-13 23:04:43
 */

const request = require('request');

const hosts = [
  'http://smoretify.herokuapp.com/',
  'http://reaction-forum.herokuapp.com'
];

module.exports.wake = (event, context) => {
  const currTime = new Date();
  console.log(`Starting waking your sites at ${currTime}`);
  hosts.forEach(function(host) {
    request(host, (err, res, body) => {
      console.log(`\nWaking up ${host}`);
      console.log('Error: ' + err);
      if (res) {
        console.log('Status Code: ' + res.statusCode);
      }
    });
  });
};
