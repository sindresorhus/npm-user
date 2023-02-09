import got from 'got';
import cheerio from 'cheerio';
import npmEmail from 'npm-email';

export default async function npmUser(username) {
	if (typeof username !== 'string') {
		throw new TypeError('Username required');
	}

	const url = `https://www.npmjs.com/~${username}`;
	try {
		const [profile, email] = await Promise.all([got(url), npmEmail(username)]);
		const $ = cheerio.load(profile.body);

		const avatar = $('img[src^="/npm-avatar"]')?.attr('src') || undefined;
		const $sidebar = $('[class^="_73a8e6f0"]');

		return {
			name: $sidebar.find('.eaac77a6.mv2').text() || undefined,
			avatar,
			email,
			github: $sidebar.find('a[href^="https://github.com/"]').text().slice(1) || undefined,
			twitter: $sidebar.find('a[href^="https://twitter.com/"]').text().slice(1) || undefined,
		};
	} catch (error) {
		if (error.statusCode === 404) {
			error.message = 'User doesn\'t exist';
		}

		throw error;
	}
}
