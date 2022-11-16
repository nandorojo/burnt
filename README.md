# 🍞 burnt

Cross-platform toasts for React Native, powered by native elements.

## Context

See this [Twitter thread](https://twitter.com/FernandoTheRojo/status/1592923529644625920).

## What

This is a library with a `toast` and `alert` method for showing ephemeral UI. 

Currently, it only works on iOS, by wrapping [`SPIndicator`](https://github.com/ivanvorobei/SPIndicator) and [`SPAlert`](https://github.com/ivanvorobei/SPAlert).

Burnt works with the new architecture (+ old) and is built on top of JSI, thanks to Expo's new module system.

## Features

- Simple, imperative `toast` that uses **native** components under the hood, rather than using React state with JS-based UI.
- Animated icons
- iOS App Store-like `alert` popups

## Usage

```tsx
import * as Burnt from 'burnt'

Burnt.toast({
  title: "That's hot!"
})
```

You can also `Burnt.alert()` and `Burnt.dismissAllAlerts()`.

## TODO

- [x] iOS support
- [ ] Android support (I probably won't build this myself, but maybe you could add it!)
- [ ] Web support (could be cool to use Radix UI...but maybe I'll leave that part up to Zeego)
- [ ] Custom iOS icons

Chances are, I'll keep this lib to iOS-only (and maybe Android), and then another library can consume it to build a broader API out on the JS side, such as [Zeego](https://zeego.dev).


## Installation

```sh
yarn add burnt
```

### Expo

```sh
npx expo prebuild --clean
npx expo run:ios
```

### Plain React Native

```sh
pod install
```

### Solito

```sh
cd applications/app
yarn add burnt
npx expo prebuild --clean
npx expo run:ios
cd ../..
yarn
```

## API

### `toast`

```tsx
Burnt.toast({
  title: 'Congrats!', // required
  
  preset: 'done',     // or "error"
  
  message: '',        // optional
  
  // ...TODO
})
```

### `alert`

`alert(options): Promise<void>`

```tsx
import * as Burnt from 'burnt'

export const alert = () => {
  Burnt.alert({
    title: 'Congrats!', // required

    preset: 'done',     // or "error", "success"

    message: '',        // optional

    // optional
    layout: {
      iconSize: {
        height: 24,
        width: 24
      },
      margins: {
        top: 10
      },
      spaceBetweenIconAndTitle: 8
    }
  })
}
```

### `dismissAllAlerts()`

Does what you think it does! In the future, I'll allow async spinners for promises, and it'll be useful then.

## Thanks

Expo Modules made this so easy to build, and all with Swift – no Objective C. It's my first time writing Swift, and it was truly a breeze.
