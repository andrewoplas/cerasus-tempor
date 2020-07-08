import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import RNModal from 'react-native-modal';
import { Button, Text, HorizontalRule } from '../elements';
import { MenuModalStyles as styles } from './styles';

export const MenuModal = ({
  isVisible,
  onShowSummaryPress,
  onShowTruckLoadPress,
  onClose,
  additionalOptionButtons,
}) => (
  <RNModal
    animationInTiming={500}
    animationOutTiming={500}
    backdropTransitionInTiming={750}
    backdropTransitionOutTiming={0}
    isVisible={isVisible}
    style={styles.modal}
    onBackButtonPress={onClose}
    onBackdropPress={onClose}
  >
    <View style={styles.modalContent}>
      <Text kind="h2" fontWeight="bold" align="center" style={styles.header}>
        Options
      </Text>
      <Button
        onPress={onShowSummaryPress}
        text="Show Summary"
        textStyle={styles.buttonText}
        style={styles.buttonSpacing}
      />
      <Button
        onPress={onShowTruckLoadPress}
        text="Show Truck Load"
        textStyle={styles.buttonText}
        style={styles.buttonSpacing}
      />

      {!!additionalOptionButtons?.length && (
        <>
          <HorizontalRule style={styles.divider} />
          {additionalOptionButtons.map(({ onPress, text }) => (
            <Button
              key={text}
              onPress={onPress}
              text={text}
              textStyle={styles.buttonText}
              style={styles.buttonSpacing}
            />
          ))}
        </>
      )}
    </View>
  </RNModal>
);

MenuModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onShowSummaryPress: PropTypes.func.isRequired,
  onShowTruckLoadPress: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  additionalOptionButtons: PropTypes.arrayOf(
    PropTypes.shape({
      onPress: PropTypes.func,
      text: PropTypes.string,
    }),
  ),
};
