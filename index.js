'use strict';
const got = require('got');
const cheerio = require('cheerio');
const npmEmail = require('npm-email');

module.exports = username => {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('Username required'));
	}

	const url = `https://www.npmjs.com/~${username}`;

	return Promise.all([got(url), npmEmail(username)]).then(values => {
		const res = values[0];
		const email = values[1];
		const $ = cheerio.load(res.body);

		let avatar = $('img[src^="https://s.gravatar.com"]').attr('src');
		avatar = avatar ? avatar.replace(/^(https:\/\/)s\./, '$1').replace(/&default=retro$/, '') : null;

		const $sidebar = $('[class^="profile__sidebar"]');

		return {
			name: $sidebar.find('.black-50.mv2').text() || null,
			avatar,
			email: email || null,
			github: $sidebar.find('a[href^="https://github.com/"]').text().slice(1) || null,
			twitter: $sidebar.find('a[href^="https://twitter.com/"]').text().slice(1) || null
		};
	}).catch(err => {
		if (err.statusCode === 404) {
			err.message = 'User doesn\'t exist';
		}

		throw err;
	});
};
