const requestt = require('request-promise');
const http = require('https');



function sendRestRequestWithHeader(URI, method, header) {
  var options = {
    uri: URI,
    method: method,
    headers: header,
    resolveWithFullResponse: false
  };

  return requestt(options).then(function (response) {
    return response;
  });

};

var HEADER = {
  'Accept-Language': 'en-GB',
  "Client-ID": "AEM",
  'User-Agent': 'chrome'
};

http.get('https://jsonplaceholder.typicode.com/users', (responce) => {
  console.log('statusCode:  ' + responce.statusCode);
if (responce.statusCode === 200) {
  console.log('OK!!! Status code of the obtained response is 200 OK!');
} else {
  console.log('ERROR!!! Status code of the obtained response is not 200!');
}
});
http.get('https://jsonplaceholder.typicode.com/users', (responce) => {
console.log('contetnType:  ' + responce.headers['content-type']);
if (responce.headers['content-type'] === 'application/json; charset=utf-8') {
  console.log('OK!!! The value of the content-type header is application/json; charset=utf-8!');
} else {
  console.log('ERROR!!! The value of the content-type header is not application/json; charset=utf-8!');
}
});

sendRestRequestWithHeader('https://jsonplaceholder.typicode.com/users', 'GET', HEADER).then(function (responce) {
  console.log('USERS:   ' + responce);
  if (JSON.parse(responce).length === 10) {
console.log('OK!!! The content of the response body is the array of 10 users!')
  } else {
    console.log('ERROR!!! The content of the response body is not the array of 10 users!')
  }
});



