/* eslint-disable react/no-array-index-key */
/* eslint-disable indent */
import PropTypes from 'prop-types';
import React from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';
import AntdIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectors } from '../../ducks/ui';
import { LinearLayout, Text } from '../elements';
import { MenuModal } from './MenuModal';
import { BackAndMenuHeaderStyles as styles } from './styles';

const Component = ({
  shipmentId,
  isBackVisible,
  isMenuVisible,
  rightIcons,
  onBackPress,
  onMenuPress,
  additionalOptionButtons,
  isViewingImage,
  navigation,
  isMenuModalVisible,
  onHideMenuModal,
}) => (
  <>
    <LinearLayout orientation="horizontal" alignItems="center" justifyContent="space-between">
      <TouchableHighlight
        disabled={!isBackVisible}
        onPress={onBackPress}
        underlayColor="transparent"
        style={styles.button}
      >
        {isBackVisible && (
          <LinearLayout orientation="horizontal" alignItems="center">
            <AntdIcon style={[styles.backButtonIcon, styles.icon]} name="arrowleft" />
            <Text kind="h4" fontWeight="medium">
              Back
            </Text>
          </LinearLayout>
        )}
      </TouchableHighlight>

      {isMenuVisible && (
        <LinearLayout orientation="horizontal" justifyContent="center" alignItems="center">
          {rightIcons && rightIcons.length
            ? rightIcons.map(({ icon, onPress }, index) => (
                <TouchableHighlight
                  key={index}
                  onPress={onPress}
                  underlayColor="transparent"
                  style={styles.button}
                >
                  {icon}
                </TouchableHighlight>
              ))
            : null}
          <TouchableHighlight
            onPress={onMenuPress}
            underlayColor="transparent"
            style={styles.button}
          >
            <FeatherIcon style={styles.icon} name="menu" />
          </TouchableHighlight>
        </LinearLayout>
      )}
    </LinearLayout>

    <MenuModal
      isVisible={isMenuModalVisible && !isViewingImage}
      onShowSummaryPress={() => {
        onHideMenuModal();
        navigation.navigate('ShipmentDetailsModal', { shipmentId });
      }}
      onShowTruckLoadPress={() => {
        onHideMenuModal();
        navigation.navigate('TruckLoadModal');
      }}
      additionalOptionButtons={additionalOptionButtons}
      onClose={onHideMenuModal}
    />
  </>
);

Component.defaultProps = {
  isBackVisible: true,
  isMenuVisible: true,
  onBackPress: () => null,
  rightIcons: [],
  additionalOptionButtons: [],
};

Component.propTypes = {
  shipmentId: PropTypes.number,
  isBackVisible: PropTypes.bool,
  isMenuVisible: PropTypes.bool,
  onBackPress: PropTypes.func,
  navigation: PropTypes.object.isRequired,
  rightIcons: PropTypes.array,
  additionalOptionButtons: PropTypes.arrayOf(
    PropTypes.shape({
      onPress: PropTypes.func,
      text: PropTypes.string,
    }),
  ),
  isViewingImage: PropTypes.bool,
  onMenuPress: PropTypes.func,
  isMenuModalVisible: PropTypes.bool,
  onHideMenuModal: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isViewingImage: selectors.selectIsViewingImage(),
});

export const BackAndMenuHeader = connect(mapStateToProps, null)(Component);
