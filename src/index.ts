import { registerPlugin } from '@capacitor/core';
import type { UserDefaultPlugin } from './definitions';

const UserDefault = registerPlugin<UserDefaultPlugin>('UserDefaultWeb', {
  web: () => import('./web').then(m => new m.UserDefaultWeb()),
});

export * from './definitions';
export * from './web';
export { UserDefault };
