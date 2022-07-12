import {Dimensions} from 'react-native';

export const HISTOGRAM_DEFAULTS = {
  data: [
    1, 5, 3, 4, 3, 2, 5, 4, 3, 4, 2, 6, 3, 2, 5, 2, 4, 2, 3, 1, 3, 4, 2, 3, 1,
    3, 4, 2, 1, 3, 5, 4,
  ],
  fillStyle: ({index}) =>
    index < 5 ? '#E57BAA' : index > 15 ? '#4C52EC' : '#B55CCA',
  width: Dimensions.get('window').width - 50,
};
