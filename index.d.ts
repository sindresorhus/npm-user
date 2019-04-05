declare namespace npmUser {
	interface UserInfo {
		/**
		User's name.
		*/
		name: string | null;

		/**
		URL to user's avatar.
		*/
		avatar: string | null;

		/**
		User's email.
		*/
		email: string | null;

		/**
		User's associated GitHub account.
		*/
		github: string | null;

		/**
		User's associated Twitter account.
		*/
		twitter: string | null;
	}
}

declare const npmUser: {
	/**
	Get user info of an npm user.

	@param name - User's username on npm.

	@example
	```
	import npmUser = require('npm-user');

	(async () => {
		console.log(await npmUser('sindresorhus'));
		// {
		// 	name: 'Sindre Sorhus',
		// 	avatar: 'https://gravatar.com/avatar/d36a92237c75c5337c17b60d90686bf9?size=496',
		// 	email: 'sindresorhus@gmail.com',
		// 	github: 'sindresorhus',
		// 	twitter: 'sindresorhus'
		// }
	})();
	```
	*/
	(name: string): Promise<npmUser.UserInfo>;

	// TODO: Remove this for the next major release, refactor the whole definition to:
	// declare function npmUser(name: string): Promise<npmUser.UserInfo>;
	// export = npmUser;
	default: typeof npmUser;
};

export = npmUser;
