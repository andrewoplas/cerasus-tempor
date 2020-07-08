import PropTypes from 'prop-types';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';
import { LinearLayout } from '../elements/LinearLayout';
import { Text } from '../elements/Text';

const styles = EStyleSheet.create({
  container: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 8,
    margin: 8,
  },
  icon: {
    marginRight: 8,
  },
  message: {
    flex: 1,
    color: 'white',
  },
});

export const ErrorLabel = ({ onPress, message, containerStyle }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={1}>
    <LinearLayout orientation="horizontal" style={[styles.container, containerStyle]}>
      <Icon style={styles.icon} name="warning" color="white" size={18} />
      <Text style={styles.message}>{message}</Text>
    </LinearLayout>
  </TouchableOpacity>
);

ErrorLabel.defaultProps = {};

ErrorLabel.propTypes = {
  message: PropTypes.string,
  onPress: PropTypes.func,
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
