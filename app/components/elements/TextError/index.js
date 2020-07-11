import PropTypes from 'prop-types';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { RFValue } from 'react-native-responsive-fontsize';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { LinearLayout } from '../LinearLayout';
import { Text } from '../Text';

const styles = EStyleSheet.create({
  container: {
    marginTop: 10,
  },

  text: {
    color: '$themeRed',
  },

  icon: {
    marginRight: 10,
    fontSize: RFValue(18),
    color: '$themeRed',
  },
});

export const TextError = ({ text }) => (
  <LinearLayout orientation="horizontal" style={styles.container}>
    <FeatherIcon style={styles.icon} name="x-circle" />
    <Text style={styles.text}>{text}</Text>
  </LinearLayout>
);

TextError.propTypes = {
  text: PropTypes.string.isRequired,
};
