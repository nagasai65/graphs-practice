import {Image as RNImage, TouchableOpacity} from 'react-native';

import React from 'react';

export const Image = ({source, onPress, style, ...rest}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={!onPress}>
      <RNImage {...{source, style, ...rest}} />
    </TouchableOpacity>
  );
};
