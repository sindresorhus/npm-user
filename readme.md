# npm-user [![Build Status](https://travis-ci.org/sindresorhus/npm-user.svg?branch=master)](https://travis-ci.org/sindresorhus/npm-user)

> Get user info of an npm user

Since npm has no API for this we're forced to scrape the [profile page](https://www.npmjs.com/~sindresorhus).

*Use the faster [npm-email](https://github.com/sindresorhus/npm-email) if you only need the email.*


## Install

```
$ npm install --save npm-user
```


## Usage

```js
const npmUser = require('npm-user');

npmUser('sindresorhus').then(user => {
	console.log(user);
	/*
	{
		npm: 'sindresorhus',
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


## Related

- [npm-user-cli](https://github.com/sindresorhus/npm-user-cli) - CLI for this module
- [npm-email](https://github.com/sindresorhus/npm-email) - Get the email of an npm user
- [npm-keyword](https://github.com/sindresorhus/npm-keyword) - Get a list of npm packages with a certain keyword
- [package-json](https://github.com/sindresorhus/package-json) - Get the package.json of a package from the npm registry
- [npm-user-packages](https://github.com/kevva/npm-user-packages) - Get packages by an npm user


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
