export interface UserInfo {
	/**
	 * User's name.
	 */
	name: string | null;

	/**
	 * URL to user's avatar.
	 */
	avatar: string | null;

	/**
	 * User's email.
	 */
	email: string | null;

	/**
	 * User's associated GitHub account.
	 */
	github: string | null;

	/**
	 * User's associated Twitter account.
	 */
	twitter: string | null;
}

/**
 * Get user info of an npm user.
 *
 * @param name - User's username on npm.
 */
export default function npmUser(name: string): Promise<UserInfo>;
