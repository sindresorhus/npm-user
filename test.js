import test from 'ava';
import npmUser from './index.js';

const avatarRegex = /^https:\/\/www\.npmjs\.com\/npm-avatar\//m;

test('user: sindresorhus', async t => {
	const user = await npmUser('sindresorhus');

	t.like(user, {
		name: 'Sindre Sorhus',
		email: 'sindresorhus@gmail.com',
		github: 'sindresorhus',
		twitter: 'sindresorhus',
	});

	t.regex(user.avatar, avatarRegex);
});

test('user: npm', async t => {
	const user = await npmUser('npm');

	t.like(user, {
		name: 'No Problem, Meatbag',
		email: 'npm@npmjs.com',
	});

	t.regex(user.avatar, avatarRegex);
});

test('user: tj', async t => {
	const user = await npmUser('tj');

	t.like(user, {
		name: undefined,
		email: 'tj@vision-media.ca',
		github: undefined,
		twitter: undefined,
	});

	t.regex(user.avatar, avatarRegex);
});

test('handles non-existent user', async t => {
	await t.throwsAsync(
		npmUser('nnnope'),
		{message: 'User `nnnope` could not be found', code: 404},
	);
});
