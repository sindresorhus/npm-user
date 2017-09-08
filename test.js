import test from 'ava';
import m from '.';

test('user: sindresorhus', async t => {
	const user = await m('sindresorhus');
	console.log(user);
	t.is(user.name, 'Sindre Sorhus');
	t.regex(user.avatar, /gravatar\.com\/avatar/);
	t.is(user.email, 'sindresorhus@gmail.com');
	t.is(user.homepage, 'https://sindresorhus.com');
	t.is(user.github, 'sindresorhus');
	t.is(user.twitter, 'sindresorhus');
	t.is(user.freenode, null);
});

test('user: npm', async t => {
	const user = await m('npm');
	t.is(user.name, 'No Problem, Meatbag');
	t.regex(user.avatar, /gravatar\.com\/avatar/);
	t.is(user.email, 'npm@npmjs.com');
	t.is(user.homepage, 'https://npmjs.org');
	t.is(user.github, 'npm');
	t.is(user.twitter, 'npmjs');
	t.is(user.freenode, null);
});
