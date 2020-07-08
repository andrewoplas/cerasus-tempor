import PropTypes from 'prop-types';
import React from 'react';
import { TouchableHighlight } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { RFValue } from 'react-native-responsive-fontsize';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { LinearLayout } from '../LinearLayout';
import { Text } from '../Text';

const styles = EStyleSheet.create({
  label: {
    marginTop: 20,
    marginBottom: 10,
    color: '$primaryRed',
  },

  buttonPadding: {
    paddingVertical: 10,
  },

  checkbox: {
    fontSize: RFValue(25),
    marginRight: 5,
    color: '$primaryGray',
  },

  checkboxActive: {
    color: '$primaryRed',
  },

  checkboxLabel: {
    color: '$primaryGray',
  },

  checkboxLabelActive: {
    color: '$primaryRed',
  },
});

export const Checkbox = ({
  label,
  onPress,
  isActive,
  buttonStyles,
  containerStyles,
  textStyles,
  iconStyles,
}) => (
  <TouchableHighlight
    onPress={onPress}
    underlayColor="transparent"
    style={[styles.buttonPadding, buttonStyles]}
  >
    <LinearLayout orientation="horizontal" alignItems="center" style={containerStyles}>
      <MaterialIcon
        name={isActive ? 'check-box' : 'check-box-outline-blank'}
        style={[styles.checkbox, isActive ? styles.checkboxActive : {}, iconStyles]}
      />
      <Text style={[styles.checkboxLabel, isActive ? styles.checkboxLabelActive : {}, textStyles]}>
        {label}
      </Text>
    </LinearLayout>
  </TouchableHighlight>
);

Checkbox.defaultProps = {
  buttonStyles: null,
  containerStyles: null,
  textStyles: null,
  iconStyles: null,
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  buttonStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  containerStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  iconStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
