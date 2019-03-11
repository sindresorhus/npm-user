import {expectType} from 'tsd-check';
import npmUser, {UserData} from '.';

const userDataPromise = npmUser('sindresorhus');
expectType<Promise<UserData>>(userDataPromise);

const userData = await userDataPromise;
expectType<string | null>(userData.name);
expectType<string | null>(userData.avatar);
expectType<string | null>(userData.email);
expectType<string | null>(userData.github);
expectType<string | null>(userData.twitter);
