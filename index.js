'use strict';
var got = require('got');
var cheerio = require('cheerio');
var Promise = require('pinkie-promise');

function unobfuscateEmail(str) {
	return str.split('%')
		.slice(1)
		.map(function (el) {
			return String.fromCharCode(parseInt(el, 16));
		})
		.join('');
}

module.exports = function (username) {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}

	var url = 'https://www.npmjs.com/~' + username;

	return got(url).then(function (res) {
		var $ = cheerio.load(res.body);

		return {
			npm: username,
			name: $('.fullname').text() || null,
			email: unobfuscateEmail($('.email [data-email]').attr('data-email')) || null,
			homepage: $('.homepage a').attr('href') || null,
			github: $('.github a').text().slice(1) || null,
			twitter: $('.twitter a').text().slice(1) || null,
			freenode: $('.freenode a').text() || null
		};
	}).catch(function (err) {
		if (err.statusCode === 404) {
			err.message = 'User doesn\'t exist';
		}

		throw err;
	});
};
