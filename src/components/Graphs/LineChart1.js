import {Dimensions} from 'react-native';
import React from 'react';
import {VictoryLine} from 'victory-native';

export const LineChart1 = () => {
  return (
    <VictoryLine
      data={[
        {x: 1, y: 2},
        {x: 2, y: 3},
        {x: 3, y: 5},
        {x: 4, y: 4},
        {x: 5, y: 6},
      ]}
      labels={({datum}) => datum.y}
      width={Dimensions.get('window').width - 50}
      height={Dimensions.get('window').width - 100}
    />
  );
};
