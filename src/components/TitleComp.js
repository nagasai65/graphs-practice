import {StyleSheet, Text, View} from 'react-native';

import {Image} from './Image';
import React from 'react';

export const TitleComp = ({
  title = 'Dashboard',
  titleStyle = {},
  leftIcon = require('../assets/menuIcon.png'),
  rightIcon = require('../assets/rightIcon.png'),
  onPressLeftIcon = () => {},
  style = {},
}) => {
  return (
    <View style={{...styles.container, ...style}}>
      <Image
        source={leftIcon}
        style={styles.leftIcon}
        onPress={onPressLeftIcon}
      />
      <Text style={{...styles.title, ...titleStyle}}>{title}</Text>
      <Image source={rightIcon} style={styles.rightIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftIcon: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: '#171848',
  },
  rightIcon: {
    width: 20,
    height: 20,
  },
});
