import test from 'ava';
import npmUser from '.';

test('user: sindresorhus', async t => {
	const user = await npmUser('sindresorhus');
	t.is(user.name, 'Sindre Sorhus');
	t.regex(user.avatar, /gravatar\.com\/avatar/);
	t.is(user.email, 'sindresorhus@gmail.com');
	t.is(user.github, 'sindresorhus');
	t.is(user.twitter, 'sindresorhus');
});

test('user: npm', async t => {
	const user = await npmUser('npm');
	t.is(user.name, 'No Problem, Meatbag');
	t.regex(user.avatar, /gravatar\.com\/avatar/);
	t.is(user.email, 'npm@npmjs.com');
	t.is(user.github, 'npm');
	t.is(user.twitter, 'npmjs');
});

test('user: tj', async t => {
	const user = await npmUser('tj');
	t.is(user.name, null);
	t.regex(user.avatar, /gravatar\.com\/avatar/);
	t.is(user.email, 'tj@vision-media.ca');
	t.is(user.github, null);
	t.is(user.twitter, null);
});
