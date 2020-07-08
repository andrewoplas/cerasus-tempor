import React from 'react';
import { Platform, UIManager } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './configureStore';
import App from './globals/route';
import globalStyles from './globals/styles';

// Build global styles
EStyleSheet.build({
  $outline: 0, // Set to `1` to show outline and `0` to hide

  $shadowDepth1: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  $scrollView: {
    flexGrow: 1,
    padding: 5,
    paddingBottom: 50,
  },

  $imageView: {
    aspectRatio: 1.7,
    resizeMode: 'contain',
    width: 300,
  },

  $imageViewFullWidth: {
    aspectRatio: 1.7,
    resizeMode: 'contain',
    width: '100%',
  },

  ...globalStyles,
});

// Start Interceptor
const store = configureStore();

// Enable LayoutAnimation on android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// eslint-disable-next-line no-console
console.disableYellowBox = false;

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
      <App />
    </PersistGate>
  </Provider>
);
