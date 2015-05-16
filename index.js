'use strict';
var got = require('got');
var cheerio = require('cheerio');

function unobfuscateEmail(str) {
	return str.split('%')
		.slice(1)
		.map(function (el) {
			return String.fromCharCode(parseInt(el, 16));
		})
		.join('');
}

module.exports = function (username, cb) {
	if (typeof username !== 'string') {
		throw new Error('username required');
	}

	var url = 'https://www.npmjs.com/~' + username;

	got(url, function (err, data) {
		if (err && err.code === 404) {
			cb(new Error('User doesn\'t exist'));
			return;
		}

		if (err) {
			cb(err);
			return;
		}

		var $ = cheerio.load(data);

		cb(null, {
			name: $('.fullname').text() || null,
			email: unobfuscateEmail($('.email [data-email]').attr('data-email')) || null,
			homepage: $('.homepage a').attr('href') || null,
			github: $('.github a').text().slice(1) || null,
			twitter: $('.twitter a').text().slice(1) || null,
			freenode: $('.freenode a').text() || null
		});
	});
};
