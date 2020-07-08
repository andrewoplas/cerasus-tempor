import PropTypes from 'prop-types';
import React from 'react';
import { TouchableHighlight } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { RFValue } from 'react-native-responsive-fontsize';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import { LinearLayout } from '../LinearLayout';
import { Text } from '../Text';

const styles = EStyleSheet.create({
  label: {
    marginTop: 20,
    marginBottom: 10,
    color: '$primaryRed',
  },

  buttonPadding: {
    padding: 10,
  },

  radioButton: {
    fontSize: RFValue(20),
    color: '$primaryGray',
  },

  radioButtonRight: {
    marginLeft: 10,
  },

  radioButtonLeft: {
    marginRight: 10,
  },

  radioButtonActive: {
    color: '$primaryRed',
  },

  radioButtonLabel: {
    color: '$primaryGray',
  },

  radioButtonLabelActive: {
    color: '$primaryRed',
    fontFamily: '$fontBold',
  },
});

export const RadioButton = ({ label, labelDirection, onPress, isActive, containerStyle }) => (
  <TouchableHighlight
    onPress={onPress}
    underlayColor="transparent"
    style={[styles.buttonPadding, containerStyle]}
  >
    <LinearLayout orientation="horizontal" justifyContent="center" alignItems="center">
      {labelDirection === 'left' && (
        <Text style={[styles.radioButtonLabel, isActive ? styles.radioButtonLabelActive : {}]}>
          {label}
        </Text>
      )}
      <FontistoIcon
        name={isActive ? 'radio-btn-active' : 'radio-btn-passive'}
        style={[
          styles.radioButton,
          isActive ? styles.radioButtonActive : {},
          labelDirection === 'right' ? styles.radioButtonLeft : styles.radioButtonRight,
        ]}
      />
      {labelDirection === 'right' && (
        <Text style={[styles.radioButtonLabel, isActive ? styles.radioButtonLabelActive : {}]}>
          {label}
        </Text>
      )}
    </LinearLayout>
  </TouchableHighlight>
);

RadioButton.defaultProps = {
  labelDirection: 'right',
};

RadioButton.propTypes = {
  label: PropTypes.any,
  labelDirection: PropTypes.oneOf(['left', 'right']),
  onPress: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  containerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
