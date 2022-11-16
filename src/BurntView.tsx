import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { BurntViewProps } from './Burnt.types';

const NativeView: React.ComponentType<BurntViewProps> =
  requireNativeViewManager('Burnt');

export default function BurntView(props: BurntViewProps) {
  return <NativeView {...props} />;
}
