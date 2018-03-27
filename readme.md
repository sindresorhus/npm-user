# npm-user [![Build Status](https://travis-ci.org/sindresorhus/npm-user.svg?branch=master)](https://travis-ci.org/sindresorhus/npm-user)

> Get user info of an npm user

Since npm has no API for this we're forced to scrape the [profile page](https://www.npmjs.com/~sindresorhus).

*Use the faster [npm-email](https://github.com/sindresorhus/npm-email) if you only need the email.*


## Install

```
$ npm install npm-user
```


## Usage

```js
const npmUser = require('npm-user');

npmUser('sindresorhus').then(user => {
	console.log(user);
	/*
	{
		name: 'Sindre Sorhus',
		avatar: 'https://gravatar.com/avatar/d36a92237c75c5337c17b60d90686bf9?size=496',
		email: 'sindresorhus@gmail.com',
		github: 'sindresorhus',
		twitter: 'sindresorhus'
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

MIT © [Sindre Sorhus](https://sindresorhus.com)
