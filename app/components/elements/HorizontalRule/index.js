import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  border: {
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: 0.5,
  },
});

export const HorizontalRule = ({ style }) => <View style={[styles.border, style]} />;

HorizontalRule.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
