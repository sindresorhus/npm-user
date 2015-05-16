'use strict';
var test = require('ava');
var npmUser = require('./');

test(function (t) {
	t.plan(7);

	npmUser('sindresorhus', function (err, user) {
		console.log(user);
		t.assert(!err, err);
		t.assert(user.name === 'Sindre Sorhus');
		t.assert(user.email === 'sindresorhus@gmail.com');
		t.assert(user.homepage === 'http://sindresorhus.com');
		t.assert(user.github === 'sindresorhus');
		t.assert(user.twitter === 'sindresorhus');
		t.assert(user.freenode === 'sindresorhus');
	});
});
