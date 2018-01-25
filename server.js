var http = require('http');
var url = require('url');

var hostname = '127.0.0.1';
var port = 8081;

function handleRequest(req, res) {
	var parsedURL = url.parse(req.url, true);
	if (req.method === 'GET' && parsedURL.pathname === '/api/palindrome') {
		var isPalindrome = false;
		var phrase = parsedURL.query.phrase;

		console.log('phrase is: ' + phrase);

		var parsedPhrase = phrase.toUpperCase().replace(/[^\w]/g, '');

		if (parsedPhrase.length === 0) {
			// not palindrome, as there are no A-Z characters
			isPalindrome = false;
		} else {
			var revString = parsedPhrase.split('').reverse().join('');
			if (parsedPhrase === revString) {
				isPalindrome = true;
			} else {
				// not the same backwards
				isPalindrome = false;
			}
		}

		if (isPalindrome) {
			console.log('it is palindrome');
			res.writeHead(200);
		} else {
			console.log('it isn\'t palindrome');
			res.writeHead(400);
		}
			res.end()
	} else {
		res.end()
	}

}

var server = http.createServer(handleRequest);

server.listen(port, hostname, function() {
	console.log('Server running at http://' + hostname + ':' + port);
});