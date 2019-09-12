/**
 * handler.js
 *
 * @author nxxinf
 * @github https://github.com/fangnx
 * @created 2019-09-12 12:58:17
 * @last-modified 2019-09-12 17:10:15
 */

'use strict';

var http = require('http');

var hosts = [
  'http://smoretify.herokuapp.com/',
  'http://reaction-forum.herokuapp.com'
];

module.exports.wake = function(event, context, callback) {
  hosts.forEach(function(host) {
    console.log(`Waking up ${host} ...`);
    http
      .get(host, function(res) {
        console.log('Success ' + res.statusCode);
        callback(null, res.statusCode);
      })
      .on('error', function(err) {
        console.log('Error: ' + err.message);
        callback(Error(err));
      });
  });
};
