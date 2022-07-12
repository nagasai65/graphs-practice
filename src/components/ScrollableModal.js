import {Dimensions, StyleSheet} from 'react-native';
import React, {useRef, useState} from 'react';
import {SHADOW_COLOR, TRANSPARENT} from '../constants/colors';

import {DashboardScreen} from '../screens/DashboardScreen';
import Modal from 'react-native-modal';
import {QuickInfoCard} from './QuickInfoCard';

export const ScrollableModal = () => {
  const [isHalfModal, setIsHalfModal] = useState(true);
  const modalRef = useRef();

  return (
    <Modal
      ref={modalRef}
      style={styles.halfModalStyle}
      isVisible={true}
      backdropOpacity={0}
      animationOutTiming={1000}
      animationIn="slideInUp"
      swipeDirection={'up'}
      onSwipeMove={() => {
        const direction = modalRef.current?.currentSwipingDirection;

        setIsHalfModal(prev => (prev ? direction === 'down' : prev));
      }}
      deviceHeight={Dimensions.get('window').height}>
      {isHalfModal ? (
        <QuickInfoCard />
      ) : (
        <DashboardScreen setIsHalfModal={setIsHalfModal} />
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  halfModalStyle: {
    backgroundColor: TRANSPARENT,
    flex: 1,
    margin: 0,
    padding: 0,
    justifyContent: 'flex-end',

    shadowColor: SHADOW_COLOR,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
