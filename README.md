# 🍞 burnt

Cross-platform toasts, powered by native elements.

## Context

See this [Twitter thread](https://twitter.com/FernandoTheRojo/status/1592923529644625920).

## What

This is a library with a `toast` and `alert` method for showing ephemeral UI. 

Currently, it only works on iOS, by wrapping [`SPIndicator`](https://github.com/ivanvorobei/SPIndicator) and [`SPAlert`](https://github.com/ivanvorobei/SPAlert).

Burnt works with the new architecture (+ old) and is built on top of JSI, thanks to Expo's new module system.

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

## Thanks

Expo Modules made this so easy to build, and all with Swift – no Objective C. It's my first time writing Swift, and it was truly a breeze.
