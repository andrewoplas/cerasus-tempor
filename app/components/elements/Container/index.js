import NetInfo from '@react-native-community/netinfo';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Dimensions, Platform, SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Text } from '../Text';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$screenBackgroundColor',
  },

  spacing: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: '$paddingHorizontal',
    flex: 1,
  },

  connectionContainer: {
    width: Dimensions.get('window').width,
    position: 'absolute',
    backgroundColor: '$themeRed',
    paddingVertical: 3,
  },

  connectionText: {
    color: '#fff',
  },
});

export const Container = ({ withScroll, spacing, style, children }) => {
  const [isConnected, setConnection] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setConnection(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const statusBar = Platform.OS === 'android' ? <StatusBar backgroundColor="black" /> : null;

  return (
    <SafeAreaView style={styles.container}>
      {!isConnected && (
        <View style={styles.connectionContainer}>
          <Text align="center" style={styles.connectionText}>
            No internet connection
          </Text>
        </View>
      )}

      {statusBar}

      <View style={[spacing ? styles.spacing : styles.noSpacing, style]}>
        {withScroll ? (
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>{children}</ScrollView>
        ) : (
          children
        )}
      </View>
    </SafeAreaView>
  );
};

Container.defaultProps = {
  withScroll: false,
  spacing: false,
};

Container.propTypes = {
  withScroll: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.any,
  spacing: PropTypes.bool,
};
