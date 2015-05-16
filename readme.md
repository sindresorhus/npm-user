# npm-user [![Build Status](https://travis-ci.org/sindresorhus/npm-user.svg?branch=master)](https://travis-ci.org/sindresorhus/npm-user)

> Get user info of a npm user

Since npm has no API for this we're forced to scrape the [profile page](https://www.npmjs.com/~sindresorhus).

*Use the faster [npm-email](https://github.com/sindresorhus/npm-email) if you only need the email.*


## Install

```
$ npm install --save npm-user
```


## Usage

```js
var npmUser = require('npm-user');

npmuser('sindresorhus', function (err, user) {
	console.log(user);
	/*
	{
		name: 'Sindre Sorhus',
		email: 'sindresorhus@gmail.com',
		homepage: 'http://sindresorhus.com',
		github: 'sindresorhus',
		twitter: 'sindresorhus',
		freenode: 'sindresorhus'
	}
	*/
});
```

*Values will be `null` if they're not set in the npm profile.*


## CLI

```
$ npm install --global npm-user
```

```
$ npm-user --help

  Usage
    $ npm-user <username>

  Example
    $ npm-user sindresorhus
    Name: Sindre Sorhus
    Email: sindresorhus@gmail.com
    Homepage: http://sindresorhus.com
    Twitter: sindresorhus
    GitHub: sindresorhus
    Freenode: sindresorhus
```


## Related

- [npm-email](https://github.com/sindresorhus/npm-email) - Get the email of a npm user
- [npm-keyword](https://github.com/sindresorhus/npm-keyword) - Get a list of npm packages with a certain keyword
- [package-json](https://github.com/sindresorhus/package-json) - Get the package.json of a package from the npm registry


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
