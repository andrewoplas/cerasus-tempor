import PropTypes from 'prop-types';
import React from 'react';
import RNModal from 'react-native-modal';
import { LinearLayout, Spinner, Text } from '../elements';
import { LoadingModalStyles as styles } from './styles';

export const LoadingModal = ({ isVisible, message }) => (
  <RNModal
    isVisible={isVisible}
    animationInTiming={500}
    animationOutTiming={500}
    backdropTransitionInTiming={750}
    backdropTransitionOutTiming={0}
    hideModalContentWhileAnimating
  >
    <LinearLayout
      orientation="horizontal"
      justifyContent="center"
      alignItems="center"
      style={styles.loadingContainer}
    >
      <Spinner size="large" style={styles.spinner} />
      <Text>{message}</Text>
    </LinearLayout>
  </RNModal>
);

LoadingModal.propTypes = {
  // title of the modal
  message: PropTypes.string,

  // shows/hides the modal
  isVisible: PropTypes.bool,
};
