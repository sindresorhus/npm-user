export type UserInfo = {
	/**
	The user's name.
	*/
	name: string | undefined;

	/**
	The URL to user's avatar.
	*/
	avatar: string | undefined;

	/**
	The user's email.
	*/
	email: string | undefined;

	/**
	The user's associated GitHub account.
	*/
	github: string | undefined;

	/**
	The user's associated Twitter account.
	*/
	twitter: string | undefined;
};

/**
Get user info of an npm user.

@param name - The user's username on npm.

@example
```
import npmUser from 'npm-user';

console.log(await npmUser('sindresorhus'));
// {
// 	name: 'Sindre Sorhus',
// 	avatar: 'https://www.npmjs.com/npm-avatar/…',
// 	email: 'sindresorhus@gmail.com',
// 	github: 'sindresorhus',
// 	twitter: 'sindresorhus'
// }
```
*/
export default function npmUser(name: string): Promise<UserInfo>;
