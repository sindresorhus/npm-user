import test from 'ava';
import fn from './';

test('should scrape ~sindresorhus', async t => {
	const user = await fn('sindresorhus');

	t.is(user.name, null);
	t.is(user.email, 'sindresorhus@gmail.com');
	t.is(user.homepage, null);
	t.is(user.github, null);
	t.is(user.twitter, null);
	t.is(user.freenode, null);
});

test('should scrape ~npm', async t => {
	const user = await fn('npm');

	t.is(user.name, 'No Problem, Meatbag');
	t.is(user.email, 'npm@npmjs.com');
	t.is(user.homepage, 'https://npmjs.org');
	t.is(user.github, 'npm');
	t.is(user.twitter, 'npmjs');
	t.is(user.freenode, null);
});
