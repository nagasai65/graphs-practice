import {
  BACKGROUND_COLOR,
  MAIN_TEXT_COLOR,
  SUB_TEXT_COLOR,
} from '../constants/colors';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {HISTOGRAM, LINE_CHART, LINE_CHART1} from '../constants/graphConstants';

import {Histogram} from './Graphs/Histogram';
import {LineChart} from './Graphs/LineChart';
import {LineChart1} from './Graphs/LineChart1';
import React from 'react';

export const GraphCard = ({
  count,
  subTitle,
  graphType,
  style = {},
  subTitleStyle = {},
  fillStyle = '#EF9595',
}) => {
  return (
    <View style={{...styles.container, ...style}}>
      <Text style={styles.count}>{count}</Text>
      <Text style={{...styles.subTitle, ...subTitleStyle}}>{subTitle}</Text>

      {{
        [HISTOGRAM]: (
          <Histogram
            width={Dimensions.get('window').width / 3}
            fillStyle={fillStyle}
          />
        ),
        [LINE_CHART]: <LineChart />,
        [LINE_CHART1]: <LineChart1 />,
      }[graphType] || <View style={styles.graph} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_COLOR,
    borderRadius: 20,
    padding: 15,

    marginVertical: 10,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  count: {
    color: MAIN_TEXT_COLOR,
    fontSize: 16,
    fontWeight: 'bold',
  },
  subTitle: {
    color: SUB_TEXT_COLOR,
    fontSize: 14,
  },
  graph: {
    height: 100,
  },
});
