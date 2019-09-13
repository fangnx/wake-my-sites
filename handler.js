/**
 * handler.js
 *
 * @author nxxinf
 * @github https://github.com/fangnx
 * @created 2019-09-12 12:58:17
 * @last-modified 2019-09-13 01:08:50
 */

'use strict';

const request = require('request');

const hosts = [
  'http://smoretify.herokuapp.com/',
  'http://reaction-forum.herokuapp.com'
];

module.exports.wake = (event, context, callback) => {
  hosts.forEach(function(host) {
    request(host, (err, res, body) => {
      console.log('Error: ' + err);
      console.log('Status Code: ' + res && res.statusCode);
    });
  });
};
