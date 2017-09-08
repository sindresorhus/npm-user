const got = require('got');
const cheerio = require('cheerio');
const Promise = require('pinkie-promise');

function unobfuscateEmail(str) {
	return str.split('%')
		.slice(1)
		.map(el => {
			return String.fromCharCode(parseInt(el, 16));
		})
		.join('');
}

module.exports = function (username) {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}

	const url = 'https://www.npmjs.com/~' + username;

	return got(url).then(res => {
		const $ = cheerio.load(res.body);

		return {
			name: $('.fullname').text() || null,
			avatar: $('.avatar img').attr('src') || null,
			email: unobfuscateEmail($('.email [data-email]').attr('data-email')) || null,
			homepage: $('.homepage a').attr('href') || null,
			github: $('.github a').text().slice(1) || null,
			twitter: $('.twitter a').text().slice(1) || null,
			freenode: $('.freenode a').text() || null
		};
	}).catch(err => {
		if (err.statusCode === 404) {
			err.message = 'User doesn\'t exist';
		}

		throw err;
	});
};
