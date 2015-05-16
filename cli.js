#!/usr/bin/env node
'use strict';
var meow = require('meow');
var npmUser = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ npm-user <username>',
		'',
		'Example',
		'  $ npm-user sindresorhus',
		'  Name: Sindre Sorhus',
		'  Email: sindresorhus@gmail.com',
		'  Homepage: http://sindresorhus.com',
		'  Twitter: sindresorhus',
		'  GitHub: sindresorhus',
		'  Freenode: sindresorhus'
	].join('\n')
});

var username = cli.input[0];

if (!username) {
	console.error('Please supply a npm username');
	process.exit(1);
}

npmUser(username, function (err, user) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}

	var ret = [];

	var createRow = function (prefix, key) {
		if (user[key]) {
			ret.push(prefix + ': ' + user[key]);
		}
	}

	createRow('Name', 'name');
	createRow('Email', 'email');
	createRow('Homepage', 'homepage');
	createRow('GitHub', 'github');
	createRow('Twitter', 'twitter');
	createRow('Freenode', 'freenode');

	console.log(ret.join('\n'));
});
