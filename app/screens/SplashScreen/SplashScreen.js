import { useFocusEffect } from '@react-navigation/native';
import PropTypes from 'prop-types';
import { useCallback } from 'react';

const SplashScreen = ({ navigation }) => {
  useFocusEffect(
    useCallback(() => {
      navigation.replace('HomeScreen');
    }, []),
  );

  return null;
};

SplashScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SplashScreen;
