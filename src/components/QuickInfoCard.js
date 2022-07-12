import {StyleSheet, Text, View} from 'react-native';

import {LineChart} from './Graphs/LineChart';
import React from 'react';

export const QuickInfoCard = ({
  title = 'Sep2 - Sep8',
  subTitle = 'vs Aug12 - Aug18',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
      <LineChart />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: '#171848',
  },
  subTitle: {
    color: '#9C9CB0',
    fontSize: 14,
    marginTop: 10,
  },
  tabsView: {
    height: 300,
  },
});
