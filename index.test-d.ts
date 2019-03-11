import {expectType} from 'tsd-check';
import npmUser, {UserInfo} from '.';

const userInfoPromise = npmUser('sindresorhus');
expectType<Promise<UserInfo>>(userInfoPromise);

const userInfo = await userInfoPromise;
expectType<string | null>(userInfo.name);
expectType<string | null>(userInfo.avatar);
expectType<string | null>(userInfo.email);
expectType<string | null>(userInfo.github);
expectType<string | null>(userInfo.twitter);
