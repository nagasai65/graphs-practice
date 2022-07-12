import {
  HOME_SCREEN_BACKGROUND_COLOR,
  HOME_SCREEN_TEXT_COLOR,
  SUB_TEXT_COLOR,
} from '../constants/colors';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

import {Histogram} from '../components/Graphs/Histogram';
import React from 'react';
import {ScrollableModal} from '../components/ScrollableModal';
import {TitleComp} from '../components/TitleComp';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const TopView = ({
  title = 'Real Time',
  subTitle = 'Active users right now',
  count = 48,
}) => {
  return (
    <View style={styles.topView}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
      <Text style={styles.count}>{count}</Text>
      <Histogram />
    </View>
  );
};

export const HomeScreen = () => {
  const {top: statusBarHeight} = useSafeAreaInsets();

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <View style={{...styles.container, paddingTop: statusBarHeight}}>
        <TitleComp
          title="Home"
          leftIcon={require('../assets/homeMenuIcon.png')}
          rightIcon={require('../assets/homeRightIcon.png')}
          titleStyle={styles.navTitle}
        />
        <TopView />
        <View style={styles.bottomView} />
      </View>
      <ScrollableModal />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: HOME_SCREEN_BACKGROUND_COLOR,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  navBar: {
    flex: 0.2,
  },
  navTitle: {
    color: HOME_SCREEN_TEXT_COLOR,
    fontSize: 20,
    fontWeight: '700',
  },
  topView: {
    flex: 0.7,
    paddingBottom: 20,
  },
  bottomView: {
    flex: 0.1,
  },
  title: {
    color: HOME_SCREEN_TEXT_COLOR,
    fontSize: 30,
    fontWeight: 'bold',
  },
  subTitle: {
    color: SUB_TEXT_COLOR,
    fontSize: 15,
    marginTop: 10,
  },
  count: {
    color: HOME_SCREEN_TEXT_COLOR,
    marginTop: 40,
    fontSize: 50,
  },
});
