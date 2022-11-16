import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to Burnt.web.ts
// and on native platforms to Burnt.ts
import BurntModule from './BurntModule';
import BurntView from './BurntView';
import { ChangeEventPayload, BurntViewProps } from './Burnt.types';

// Get the native constant value.
export const PI = BurntModule.PI;

export function hello(): string {
  return BurntModule.hello();
}

export async function setValueAsync(value: string) {
  return await BurntModule.setValueAsync(value);
}

const emitter = new EventEmitter(BurntModule ?? NativeModulesProxy.Burnt);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { BurntView, BurntViewProps, ChangeEventPayload };
