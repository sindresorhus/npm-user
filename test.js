import test from 'ava';
import fn from './';

test(async t => {
	const user = await fn('sindresorhus');

	t.is(user.name, 'Sindre Sorhus');
	t.is(user.email, 'sindresorhus@gmail.com');
	t.is(user.homepage, 'http://sindresorhus.com');
	t.is(user.github, 'sindresorhus');
	t.is(user.twitter, 'sindresorhus');
	t.is(user.freenode, 'sindresorhus');
});

test(async t => {
	const user = await fn('sebmck');

	t.true(user.packages.indexOf('babel-core') >= 0);
	t.false(user.packages.indexOf('bower') >= 0);
});
