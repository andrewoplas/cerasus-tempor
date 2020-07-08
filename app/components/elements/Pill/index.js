import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { RFValue } from 'react-native-responsive-fontsize';
import { LinearLayout } from '../LinearLayout';
import { Text } from '../Text';

const styles = EStyleSheet.create({
  container: {
    paddingHorizontal: RFValue(10),
    paddingVertical: 5,
    borderRadius: 5,
    width: RFValue(100),
  },
  text: {
    color: '#fff',
  },
});

export const Pill = ({ text, size, color, containerStyle, textStyle, inverse }) => {
  const colorCode = EStyleSheet.value(`$primary${_.upperFirst(color)}`);

  return (
    <LinearLayout
      style={[styles.container, inverse ? {} : { backgroundColor: colorCode }, containerStyle]}
    >
      <Text
        kind="small"
        align="center"
        fontWeight={size !== 'small' ? 'bold' : 'normal'}
        style={[styles.text, inverse ? { color: colorCode } : {}, textStyle]}
      >
        {text}
      </Text>
    </LinearLayout>
  );
};

Pill.defaultProps = {
  size: 'normal',
  color: 'gray',
  inverse: false,
};

Pill.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  color: PropTypes.oneOf(['gray', 'yellow', 'green', 'red', 'orange', 'blue']),
  inverse: PropTypes.bool,
  containerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  textStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
