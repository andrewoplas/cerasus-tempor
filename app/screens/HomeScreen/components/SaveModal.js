import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import RNModal from 'react-native-modal';
import { Button, Input, LinearLayout } from '../../../components/elements';

const styles = EStyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    paddingHorizontal: '$paddingHorizontal',
    paddingVertical: 35,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
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
    style={styles.modal}
    onBackButtonPress={onClose}
    onBackdropPress={onClose}
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
