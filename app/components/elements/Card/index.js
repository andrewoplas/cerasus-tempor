import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: 'white',

    // Shadow for IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    // Shadow for Android
    elevation: 3,
  },
});

export const Card = ({ style, children }) => (
  <View style={[styles.container, style]}>{children}</View>
);

Card.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
};
