'use strict';
const got = require('got');
const cheerio = require('cheerio');
const npmEmail = require('npm-email');

const npmUser = async username => {
	if (typeof username !== 'string') {
		throw new TypeError('Username required');
	}

	const url = `https://www.npmjs.com/~${username}`;
	try {
		const [profile, email] = await Promise.all([got(url), npmEmail(username)]);
		const $ = cheerio.load(profile.body);

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
	} catch (error) {
		if (error.statusCode === 404) {
			error.message = 'User doesn\'t exist';
		}

		throw error;
	}
};

module.exports = npmUser;
module.exports.default = npmUser;
