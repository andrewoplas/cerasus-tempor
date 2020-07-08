import Color from 'color';
import PropTypes from 'prop-types';
import React from 'react';
import { TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = EStyleSheet.create({
  input: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    color: '$primaryBlack',
    fontFamily: '$fontMedium',
    fontSize: RFValue(18),
    borderRadius: 4,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '$primaryLightGray',
    maxHeight: 100,
    textAlignVertical: 'top',
  },

  disabled: {
    backgroundColor: () => Color(EStyleSheet.value('$primaryGray')).lighten(0.7),
  },
});

export const TextArea = ({ numberOfLines, placeholder, onChangeText, value, disabled, style }) => (
  <TextInput
    numberOfLines={numberOfLines}
    editable={!disabled}
    placeholderTextColor={EStyleSheet.value('$primaryLightGray')}
    placeholder={placeholder}
    onChangeText={text => onChangeText(text)}
    value={`${value || ''}`}
    style={[styles.input, style, disabled ? styles.disabled : {}]}
    multiline
  />
);

TextArea.defaultProps = {
  numberOfLines: 2,
  disabled: false,
};

TextArea.propTypes = {
  numberOfLines: PropTypes.number,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
