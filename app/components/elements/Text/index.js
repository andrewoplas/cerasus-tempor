import PropTypes from 'prop-types';
import React from 'react';
import { Text as RNText } from 'react-native';
import { getTextStyle } from './styles';

export const Text = ({ style, kind: fontSize, fontWeight, align, children, ...rest }) => (
  <RNText
    adjustsFontSizeToFit
    style={[getTextStyle(`${fontSize}-${fontWeight}-${align}`, fontSize, fontWeight, align), style]}
    {...rest}
  >
    {children}
  </RNText>
);

Text.defaultProps = {
  style: null,
  align: 'left',
  fontWeight: 'normal',
  kind: 'paragraph',
};

Text.propTypes = {
  children: PropTypes.any,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  fontWeight: PropTypes.oneOf(['light', 'normal', 'medium', 'bold', 'extraBold']),
  kind: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'small', 'paragraph']),
};
