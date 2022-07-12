import {HISTOGRAM_DEFAULTS} from '../../constants/histogramConstants';
import React from 'react';
import {VictoryBar} from 'victory-native';

export const Histogram = ({
  data = HISTOGRAM_DEFAULTS.data,
  fillStyle = HISTOGRAM_DEFAULTS.fillStyle,
  width = HISTOGRAM_DEFAULTS.width,
}) => {
  return (
    <VictoryBar
      data={data}
      style={{
        data: {
          fill: fillStyle,
        },
      }}
      height={50}
      padding={5}
      width={width}
    />
  );
};
