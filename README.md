# @pabrick/capacitor-user-default

Froked branch from `@nadlowebagentur/capacitor-user-default` to make it compatible with Capacitor 3.0
Credits to: @nadlowebagentur

## Example

```typescript
import { UserDefault } from '@pabrick/capacitor-user-default';

// access to the plugin
UserDefault.getByKey({ key: 'appServerURL' }).then(({ value }: any) => {
  console.log({ value });
});
```
