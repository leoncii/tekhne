'use strict';

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Please fix this file, contains errors

(0, _nodeFetch2.default)('https://github.com/tecnocrata').then(res => {
  // console.log(res)
  console.log(res.ok);
  console.log('------');
  console.log(res.status);
  console.log('------');
  console.log(res.statusText);
  console.log('------');
  console.log(res.headers.raw());
  console.log('------');
  console.log(res.headers.get('content-type'));
});