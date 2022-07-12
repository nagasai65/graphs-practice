import {VictoryChart, VictoryLine, VictoryTheme} from 'victory-native';

import React from 'react';

export const LineChart = () => {
  return (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryLine
        style={{
          data: {stroke: '#c43a31'},
          parent: {border: '1px solid #ccc'},
        }}
        data={[
          {x: 1, y: 2},
          {x: 2, y: 3},
          {x: 3, y: 5},
          {x: 4, y: 4},
          {x: 5, y: 7},
        ]}
      />
    </VictoryChart>
  );
};
