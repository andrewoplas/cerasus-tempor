/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Spinner } from '../Spinner';
import { LinearLayout } from '../LinearLayout';
import { getButtonUnderlayColor } from '../../../utils/common';

const styles = EStyleSheet.create({
  container: {
    borderRadius: 50,
    padding: 12,
  },

  disabled: {
    backgroundColor: '$disabledColor',
    color: '#ffff',
  },
});

export const RoundedButton = ({ disabled, onPress, icon, loading, style, backgroundColor }) => (
  <TouchableHighlight
    style={[style, styles.container, { backgroundColor }]}
    underlayColor={getButtonUnderlayColor(backgroundColor)}
    onPress={onPress}
    disabled={disabled || loading}
  >
    <View>
      {loading ? (
        <View style={[styles.container, style]}>
          <Spinner size="small" color="#fff" />
        </View>
      ) : (
        <LinearLayout style={[disabled ? styles.disabled : {}]}>{icon}</LinearLayout>
      )}
    </View>
  </TouchableHighlight>
);

RoundedButton.defaultProps = {
  icon: null,
  loading: false,
  disabled: false,
};

RoundedButton.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.any,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  backgroundColor: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};
