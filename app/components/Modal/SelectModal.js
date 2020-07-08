import PropTypes from 'prop-types';
import React from 'react';
import { ScrollView, View, TouchableHighlight } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import RNModal from 'react-native-modal';
import { Text, LinearLayout } from '../elements';
import { SelectModal as styles } from './styles';

export const SelectModal = ({ title, items, onSelectItem, isVisible, onClose }) => (
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
        {title}
      </Text>

      <LinearLayout style={styles.scrollViewContainer}>
        <ScrollView
          contentContainerStyle={[EStyleSheet.value('$scrollView'), styles.scrollViewContent]}
        >
          {items.map(({ id, label }, index) => (
            <TouchableHighlight
              key={id}
              onPress={() => {
                onSelectItem(id);
                onClose();
              }}
              underlayColor="transparent"
              style={[
                styles.textContainer,
                EStyleSheet.child(styles, 'textContainerBorder', index, items.length),
              ]}
            >
              <Text kind="h4" fontWeight="medium">
                {label}
              </Text>
            </TouchableHighlight>
          ))}
        </ScrollView>
      </LinearLayout>
    </View>
  </RNModal>
);

SelectModal.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
    }).isRequired,
  ),
  onSelectItem: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};
