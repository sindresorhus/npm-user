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
// 	avatar: 'https://gravatar.com/avatar/d36a92237c75c5337c17b60d90686bf9?size=496',
// 	email: 'sindresorhus@gmail.com'
// }
```
*/
export default function npmUser(name: string): Promise<UserInfo>;
