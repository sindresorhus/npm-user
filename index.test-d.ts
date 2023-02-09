import {expectType} from 'tsd';
import npmUser, {type UserInfo} from './index.js';

const userInfoPromise = npmUser('sindresorhus');
expectType<Promise<UserInfo>>(userInfoPromise);

const userInfo = await userInfoPromise;
expectType<string | undefined>(userInfo.name);
expectType<string | undefined>(userInfo.avatar);
expectType<string | undefined>(userInfo.email);
expectType<string | undefined>(userInfo.github);
expectType<string | undefined>(userInfo.twitter);
