import memoize from 'lodash/memoize';
import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const getOrientationStyles = memoize(orientation =>
  EStyleSheet.create({
    flexDirection: orientation === 'vertical' ? 'column' : 'row',
  }),
);

const getAlignItemsStyles = memoize(alignItems =>
  EStyleSheet.create({
    alignItems,
  }),
);

const getJustifyContentStyles = memoize(justifyContent =>
  EStyleSheet.create({
    justifyContent,
  }),
);

export const LinearLayout = ({ children, style, orientation, justifyContent, alignItems }) => (
  <View
    style={[
      getOrientationStyles(orientation),
      getAlignItemsStyles(alignItems),
      getJustifyContentStyles(justifyContent),
      style,
    ]}
  >
    {children}
  </View>
);

LinearLayout.defaultProps = {
  orientation: 'vertical',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
};

LinearLayout.propTypes = {
  children: PropTypes.any,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ]),
  alignItems: PropTypes.oneOf(['stretch', 'flex-start', 'flex-end', 'center', 'baseline']),
};
