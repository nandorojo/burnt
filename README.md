# 🍞 burnt

Cross-platform toasts for React Native, powered by native elements.

https://user-images.githubusercontent.com/13172299/202289223-8a333223-3afa-49c4-a001-a70c76150ef0.mp4

## Context

See this
[Twitter thread](https://twitter.com/FernandoTheRojo/status/1592923529644625920).

## What

This is a library with a `toast` and `alert` method for showing ephemeral UI.

On iOS, it wraps [`SPIndicator`](https://github.com/ivanvorobei/SPIndicator) and
[`SPAlert`](https://github.com/ivanvorobei/SPAlert).

On Android, it wraps `ToastAndroid` from `react-native`. `Burnt.alert()` falls back to `Burnt.toast()` on Android.

Burnt works with both the old & new architectures. It's built on top of JSI,
thanks to Expo's new module system.

## Features

- Simple, imperative `toast` that uses **native** components under the hood,
  rather than using React state with JS-based UI.
- Animated icons
- iOS App Store-like `alert` popups
- Overlays on top of native iOS modals, unlike JS-based solutions
  (video)[https://twitter.com/FernandoTheRojo/status/1593632122069291008].

## Usage

```tsx
import * as Burnt from "burnt";

Burnt.toast({
  title: "Burnt installed.",
  preset: "done",
  message: "See your downloads.",
});
```

You can also `Burnt.alert()` and `Burnt.dismissAllAlerts()`.

## TODO

- [x] iOS support
- [x] Android support
- [ ] Web support (could be cool to use Radix UI...but maybe I'll leave that
      part up to Zeego)
- [ ] Custom iOS icons

Chances are, I'll keep this lib to iOS & Android only, and then
another library can consume it to build a broader API out on the JS side with Web support, such as [Zeego](https://zeego.dev).

## Installation

```sh
yarn add burnt
```

### Expo

Burnt likely requires Expo SDK 46+.

```sh
expo install burnt expo-build-properties
```

Add the `expo-build-properties` plugin to your `app.json`/`app.config.js`,
setting the deployment target to `13.0` (or higher):

```js
export default {
  plugins: [
    [
      "expo-build-properties",
      {
        ios: {
          deploymentTarget: "13.0",
        },
      },
    ],
  ],
};
```

Then, you'll need to rebuild your dev client. Burnt will not work in Expo Go.

```sh
npx expo prebuild --clean
npx expo run:ios
```

The config plugin ensures that your iOS app has at least iOS 13 as a deployment
target, which is required for Burnt (as well as Expo SDK 47+).

### Plain React Native

```sh
pod install
```

### Solito

```sh
cd applications/app
expo install burnt expo-build-properties
npx expo prebuild --clean
npx expo run:ios
cd ../..
yarn
```

Be sure to follow the [expo](#expo) instructions too.

## API

### `toast`

https://user-images.githubusercontent.com/13172299/202275423-300671e5-3918-4d5d-acae-0602160de252.mp4

_The API changed since recording this video. It now uses object syntax._

`toast(options): Promise<void>`

```tsx
Burnt.toast({
  title: 'Congrats!', // required

  preset: 'done',     // or "error"

  message: '',        // optional

  haptic: 'none',      // or "success", "warning", "error"

  duration: 2,         // duration in seconds

  shouldDismissByDrag: true
})
```

### `alert`

https://user-images.githubusercontent.com/13172299/202275324-4f6cb5f5-a103-49b5-993f-2030fc836edb.mp4

_The API changed since recording this video. It now uses object syntax._

`alert(options): Promise<void>`

```tsx
import * as Burnt from "burnt";

export const alert = () => {
  Burnt.alert({
    title: "Congrats!", // required

    preset: "done", // or "error", "heart"

    message: "", // optional

    duration: 2, // duration in seconds

    // optional
    layout: {
      iconSize: {
        height: 24,
        width: 24,
      },

      // TODO: custom SF Symbols...
    },
  });
};
```

### `dismissAllAlerts()`

Does what you think it does! In the future, I'll allow async spinners for
promises, and it'll be useful then.

## Contribute

```sh
yarn build
cd example
npx expo run:ios # do this again whenever you change native code
```

You can edit the iOS files in `ios/`, and then update the JS accordingly in
`src`.

## Thanks

Special thanks to [Tomasz Sapeta](https://twitter.com/tsapeta) for offering help
along the way.

Expo Modules made this so easy to build, and all with Swift – no Objective C.
It's my first time writing Swift, and it was truly a breeze.
