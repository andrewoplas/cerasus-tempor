import PropTypes from 'prop-types';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const Spinner = ({ color, size, style }) => (
  <ActivityIndicator style={style} size={size} color={color || EStyleSheet.value('$primaryGray')} />
);

Spinner.propTypes = {
  style: PropTypes.object,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
