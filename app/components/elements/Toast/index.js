import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { LayoutAnimation, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import { RFValue } from 'react-native-responsive-fontsize';
import { Text } from '../Text';
import { LinearLayout } from '../LinearLayout';
import { TOAST_TIMEOUT } from '../../../globals/variables';

const styles = EStyleSheet.create({
  container: {
    zIndex: 100,
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    padding: 16,
    borderRadius: 50,
    backgroundColor: '$primaryLighterGray',
  },

  message: {
    fontFamily: '$fontRegular',
    fontSize: RFValue(16),
    color: '$primaryBlack',
  },

  icon: {
    marginRight: 8,
  },
});

export const Toast = ({ message, onShowEnd, isError }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      setTimeout(() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setVisible(false);
        onShowEnd();
      }, TOAST_TIMEOUT);
    } else {
      setVisible(false);
    }
  }, [message]);

  return (
    <>
      {visible && (
        <View style={[styles.container, isError ? styles.error : styles.success]}>
          <LinearLayout orientation="horizontal" alignItems="center">
            <MaterialIconsIcon
              style={styles.icon}
              name={isError ? 'close' : 'check'}
              size={18}
              color={EStyleSheet.value(isError ? '$primaryRed' : '$primaryGreen')}
            />
            <Text style={styles.message}>{message}</Text>
          </LinearLayout>
        </View>
      )}
    </>
  );
};

Toast.defaultProps = {
  isError: false,
  message: '',
};

Toast.propTypes = {
  message: PropTypes.string,
  onShowEnd: PropTypes.func,
  isError: PropTypes.bool,
};
