'use strict';
const got = require('got');
const cheerio = require('cheerio');
const npmEmail = require('npm-email');

module.exports = username => {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('Username required'));
	}

	const url = `https://www.npmjs.com/~${username}`;
    
    return Promise.all([got(url), npmEmail(username)]).then((values) => {
        const res = values[0];
        const email = values[1];
        const $ = cheerio.load(res.body);

		let avatar = $('.avatar img').attr('src');
		avatar = avatar ? avatar.replace(/^(https:\/\/)s\./, '$1').replace(/&default=retro$/, '') : null;

        return {
			name: $('.fullname').text() || null,
			avatar,
			email: email || null,
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
