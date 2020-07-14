/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { RFValue } from 'react-native-responsive-fontsize';
import { Spinner } from '../Spinner';
import { Text } from '../Text';

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '$themeYellow',
    justifyContent: 'center',
    fontFamily: '$fontRegular',
    padding: RFValue(15),
    borderRadius: 40,
  },

  disabled: {
    backgroundColor: '$disabledColor',
    color: '#ffff',
  },

  text: {
    color: '#ffff',
  },
});

export const Button = ({
  disabled,
  onPress,
  text,
  leftIcon,
  rightIcon,
  loading,
  style,
  textStyle,
  loadingColor,
  touchableStyle,
  underlayColor,
}) => (
  <TouchableHighlight
    underlayColor={underlayColor}
    onPress={onPress}
    disabled={disabled || loading}
    style={touchableStyle}
  >
    <View>
      {!loading ? (
        <View style={[styles.container, style, disabled ? styles.disabled : {}]}>
          {leftIcon}
          <Text kind="h4" fontWeight="bold" style={[styles.text, textStyle]}>
            {text}
          </Text>
          {rightIcon}
        </View>
      ) : (
        <View style={[styles.container, style]}>
          <Spinner size="small" color={loadingColor} />
        </View>
      )}
    </View>
  </TouchableHighlight>
);

Button.defaultProps = {
  underlayColor: 'transparent',
  leftIcon: null,
  rightIcon: null,
  loading: false,
  disabled: false,
  loadingColor: '#fff',
};

Button.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  leftIcon: PropTypes.any,
  rightIcon: PropTypes.any,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  touchableStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  underlayColor: PropTypes.string,
  loading: PropTypes.bool,
  loadingColor: PropTypes.string,
};
