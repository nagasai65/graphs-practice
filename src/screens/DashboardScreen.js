import {APP_BACKGROUND_COLOR, MAIN_TEXT_COLOR} from '../constants/colors';
import {HISTOGRAM, LINE_CHART1} from '../constants/graphConstants';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

import {GraphCard} from '../components/GraphCard';
import React from 'react';
import {TitleComp} from '../components/TitleComp';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const TopView = () => {
  return (
    <View style={styles.topView}>
      <GraphCard
        count={'10,000k'}
        subTitle={'New Users'}
        graphType={LINE_CHART1}
      />
      <View style={styles.graphCardRow}>
        <GraphCard
          count={'12.2k'}
          subTitle={'Users'}
          style={styles.halfGraphCard}
          graphType={HISTOGRAM}
          fillStyle={'#EF9595'}
        />
        <GraphCard
          count={'14.7k'}
          subTitle="Sessions"
          style={styles.halfGraphCard}
          graphType={HISTOGRAM}
          fillStyle={'#C198F0'}
        />
      </View>
    </View>
  );
};

const BottomView = () => {
  return (
    <View style={styles.graphCardRow}>
      <GraphCard
        subTitle={'By Device'}
        style={styles.halfGraphCard}
        subTitleStyle={styles.boldSubTitle}
      />
      <GraphCard
        subTitle={'By Country'}
        style={styles.halfGraphCard}
        subTitleStyle={styles.boldSubTitle}
      />
    </View>
  );
};

export const DashboardScreen = ({setIsHalfModal}) => {
  const {top: statusBarHeight} = useSafeAreaInsets();

  return (
    <View style={{...styles.container, paddingTop: statusBarHeight}}>
      <StatusBar barStyle={'dark-content'} />
      <TitleComp
        title="Dashboard"
        onPressLeftIcon={() => setIsHalfModal(true)}
      />
      <TopView />
      <Text style={styles.whereText}>Where are your Users?</Text>
      <BottomView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: APP_BACKGROUND_COLOR,
  },
  graphCardRow: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfGraphCard: {
    flex: 0.47,
  },
  topView: {
    // marginVertical: 10,
  },
  boldSubTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: MAIN_TEXT_COLOR,
  },
  whereText: {
    color: MAIN_TEXT_COLOR,
    fontSize: 18,
    fontWeight: '600',
  },
});
