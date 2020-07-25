import PropTypes from 'prop-types';
import React from 'react';
import { ImageBackground, SafeAreaView, TouchableHighlight } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import RNModal from 'react-native-modal';
import { RFValue } from 'react-native-responsive-fontsize';
import AntdIcon from 'react-native-vector-icons/AntDesign';
import backgroundImage from '../../assets/images/background-dark.png';
import { LinearLayout, Text } from '../elements';

export const styles = EStyleSheet.create({
  modal: {
    alignItems: 'flex-end',
    margin: 0,
  },

  modalContent: {
    width: '70%',
    flex: 1,
    padding: 0,
    resizeMode: 'cover',
  },

  background: {
    backgroundColor: '#000',
    resizeMode: 'cover',
    flex: 1,
  },

  item: {
    paddingVertical: 25,
    paddingHorizontal: '$paddingHorizontal',
  },

  itemActive: {
    color: '$themeBlack',
    backgroundColor: '$themeYellow',
  },

  icon: {
    marginRight: 25,
    fontSize: RFValue(20),
    color: '#fff',
  },

  text: {
    fontSize: RFValue(20),
    fontFamily: '$fontBold',
    color: '#fff',
  },
});

const sidebarItems = [
  {
    screen: 'HomeScreen',
    icon: 'home',
    label: 'Home',
  },
  {
    screen: 'SaveNowScreen',
    icon: 'clockcircleo',
    label: 'Save Now',
  },
  {
    screen: 'SaveLaterScreen',
    icon: 'clockcircleo',
    label: 'Save Later',
  },
  {
    screen: 'StatisticsScreen',
    icon: 'areachart',
    label: 'Statistics',
  },
  {
    screen: 'SummaryScreen',
    icon: 'profile',
    label: 'Summary',
  },
];

export const Sidebar = ({ isVisible, onItemPress, currentScreen, onClose }) => (
  <RNModal
    isVisible={isVisible}
    animationIn="slideInRight"
    animationOut="slideOutRight"
    animationInTiming={500}
    animationOutTiming={250}
    backdropTransitionInTiming={500}
    backdropTransitionOutTiming={0}
    onBackButtonPress={onClose}
    onBackdropPress={onClose}
    style={styles.modal}
  >
    <SafeAreaView style={styles.modalContent}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        {sidebarItems.map(({ screen, icon, label }) => (
          <TouchableHighlight key={screen} onPress={() => onItemPress(screen)}>
            <LinearLayout
              style={[styles.item, screen === currentScreen ? styles.itemActive : null]}
              orientation="horizontal"
              alignItems="center"
            >
              <AntdIcon name={icon} style={styles.icon} />
              <Text style={styles.text}>{label}</Text>
            </LinearLayout>
          </TouchableHighlight>
        ))}
      </ImageBackground>
    </SafeAreaView>
  </RNModal>
);

Sidebar.propTypes = {
  isVisible: PropTypes.bool,
  onItemPress: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  currentScreen: PropTypes.string.isRequired,
};
