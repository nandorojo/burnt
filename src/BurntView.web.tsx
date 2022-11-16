import * as React from 'react';

import { BurntViewProps } from './Burnt.types';

export default function BurntView(props: BurntViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
