import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import RNModal from 'react-native-modal';
import { Button, Input, LinearLayout } from '../../../components/elements';

const styles = EStyleSheet.create({
  modalContent: {
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 30,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },

  saveActions: {
    marginTop: 20,
  },

  saveButton: {
    flex: 1,
  },

  buttonSpacing: {
    marginRight: 10,
  },
});

export const SaveModal = ({
  isVisible,
  onClose,
  onChangeText,
  inputValue,
  inputGeneratedValue,
  onSaveNow,
  onSaveLater,
}) => (
  <RNModal
    animationInTiming={500}
    animationOutTiming={250}
    backdropTransitionInTiming={500}
    backdropTransitionOutTiming={0}
    isVisible={isVisible}
    onBackButtonPress={onClose}
    onBackdropPress={onClose}
    hideModalContentWhileAnimating
  >
    <View style={styles.modalContent}>
      <Input
        label="Name (Optional)"
        value={inputValue}
        placeholder={inputGeneratedValue}
        onChangeText={onChangeText}
      />

      <LinearLayout orientation="horizontal" style={styles.saveActions}>
        <Button
          text="Save Now"
          onPress={onSaveNow}
          touchableStyle={[styles.buttonSpacing, styles.saveButton]}
        />
        <Button text="Save Later" onPress={onSaveLater} touchableStyle={styles.saveButton} />
      </LinearLayout>
    </View>
  </RNModal>
);

SaveModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onChangeText: PropTypes.func.isRequired,
  inputValue: PropTypes.string,
  inputGeneratedValue: PropTypes.string,
  onSaveNow: PropTypes.func.isRequired,
  onSaveLater: PropTypes.func.isRequired,
};
