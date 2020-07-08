import PropTypes from 'prop-types';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { RFValue } from 'react-native-responsive-fontsize';
import { LinearLayout } from '../LinearLayout';
import { Text } from '../Text';

const styles = EStyleSheet.create({
  title: {
    fontFamily: '$fontBold',
    fontSize: RFValue(14),
    color: '$primaryBlack',
  },
});

export const Label = ({ titleStyle, containerStyle, icon, title }) => (
  <LinearLayout orientation="horizontal" alignItems="center" style={containerStyle}>
    {icon}
    <Text style={[styles.title, titleStyle]}>{title}</Text>
  </LinearLayout>
);

Label.defaultProps = {};

Label.propTypes = {
  icon: PropTypes.any,
  title: PropTypes.string,
  titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
