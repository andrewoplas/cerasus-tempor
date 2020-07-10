import Color from 'color';
import PropTypes from 'prop-types';
import React from 'react';
import { TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { RFValue } from 'react-native-responsive-fontsize';
import { LinearLayout } from '../LinearLayout';
import { Text } from '../Text';

const styles = EStyleSheet.create({
  container: {
    marginTop: 5,
    borderRadius: 4,
    backgroundColor: '#fff',
  },

  disabledContainer: {
    backgroundColor: () => Color(EStyleSheet.value('$primaryGray')).lighten(0.7),
  },

  label: {
    color: '$primaryGray',
  },

  input: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    color: '$primaryBlack',
    fontFamily: '$fontMedium',
    fontSize: RFValue(18),
  },

  inputIfLeftIcon: {
    paddingLeft: 5,
  },

  inputRightIcon: {
    marginRight: 10,
    fontSize: RFValue(18),
    color: '$primaryRed',
  },

  inputLeftIcon: {
    marginRight: 10,
    fontSize: RFValue(18),
    color: '$primaryRed',
  },

  iconContainerLeft: {
    paddingLeft: 10,
    paddingRight: 5,
  },

  iconContainerRight: {
    paddingLeft: 5,
  },
});

export const Input = ({
  placeholder,
  label,
  leftIcon,
  rightIcon,
  onChangeText,
  value,
  disabled,
  maxLength,
  keyboardType,
  inputStyles,
  labelStyles,
  containerStyles,
  ...props
}) => (
  <LinearLayout style={containerStyles}>
    {label && (
      <Text fontWeight="bold" style={[styles.label, labelStyles]}>
        {label}
      </Text>
    )}
    <LinearLayout
      orientation="horizontal"
      alignItems="center"
      justifyContent="center"
      style={[
        styles.container,
        disabled ? styles.disabledContainer : {},
        EStyleSheet.value('$shadowDepth1'),
      ]}
    >
      {leftIcon && <LinearLayout style={styles.iconContainerLeft}>{leftIcon}</LinearLayout>}
      <TextInput
        editable={!disabled}
        placeholderTextColor={EStyleSheet.value('$primaryLightGray')}
        placeholder={placeholder}
        onChangeText={(text) => onChangeText(text)}
        value={value === null ? '' : value.toString()}
        maxLength={maxLength || undefined}
        keyboardType={keyboardType}
        style={[styles.input, inputStyles, leftIcon ? styles.inputIfLeftIcon : {}]}
        {...props}
      />
      {rightIcon && <LinearLayout style={styles.iconContainerRight}>{rightIcon}</LinearLayout>}
    </LinearLayout>
  </LinearLayout>
);

Input.defaultProps = {
  leftIcon: null,
  rightIcon: null,
  disabled: false,
  keyboardType: 'default',
};

Input.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  leftIcon: PropTypes.any,
  rightIcon: PropTypes.any,
  onChangeText: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  maxLength: PropTypes.number,
  inputStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  labelStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  containerStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  keyboardType: PropTypes.string,
};
