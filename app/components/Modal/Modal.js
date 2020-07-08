/* eslint-disable react/no-array-index-key */
// Library: https://github.com/react-native-community/react-native-modal

import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { ScrollView, TouchableHighlight, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import RNModal from 'react-native-modal';
import { doNothing, getButtonUnderlayColor } from '../../utils/common';
import { LinearLayout, Spinner, Text } from '../elements';
import { styles } from './styles';

export const timing = {
  ANIMATION_IN_TIMING: 500,
  ANIMATION_OUT_TIMING: 500,
  BACKDROP_TRANSITION_IN_TIMING: 750,
  BACKDROP_TRANSITION_OUT_TIMING: 0,
};

export const Modal = ({
  isVisible,
  icon,
  title,
  message: description,
  onBackButtonPress,
  onBackdropPress,
  actionButtons,
  isLoading,
  loadingText,
  children,
  ...rest
}) => {
  let messages = null;
  if (description) {
    messages = _.isArray(description) ? description : [description];
  }

  return (
    <RNModal
      isVisible={isVisible}
      onBackdropPress={isLoading ? doNothing : onBackdropPress}
      onBackButtonPress={isLoading ? doNothing : onBackButtonPress}
      animationInTiming={timing.ANIMATION_IN_TIMING}
      animationOutTiming={timing.ANIMATION_OUT_TIMING}
      backdropTransitionInTiming={timing.BACKDROP_TRANSITION_IN_TIMING}
      backdropTransitionOutTiming={timing.BACKDROP_TRANSITION_OUT_TIMING}
      hideModalContentWhileAnimating
      {...rest}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          {!isLoading ? (
            <LinearLayout>
              <LinearLayout alignItems="center">
                {icon}
                {!!title && (
                  <Text style={styles.title} kind="h3" fontWeight="bold" align="center">
                    {title}
                  </Text>
                )}
              </LinearLayout>

              {messages &&
                messages.map((message, index) => (
                  <Text key={`message-${index}`} fontWeight="medium" style={styles.description}>
                    {message}
                  </Text>
                ))}

              {children}

              <LinearLayout orientation="horizontal" style={styles.actionButtons}>
                {actionButtons.map((actionButton, index) => (
                  <TouchableHighlight
                    underlayColor={getButtonUnderlayColor(actionButton.backgroundColor)}
                    key={`action-button${index}`}
                    onPress={actionButton.onPress}
                    style={[
                      EStyleSheet.child(styles, 'actionButton', index, actionButtons.length),
                      { backgroundColor: actionButton.backgroundColor },
                    ]}
                  >
                    <Text
                      kind="h4"
                      align="center"
                      fontWeight="bold"
                      style={{ color: actionButton.textColor }}
                    >
                      {actionButton.name}
                    </Text>
                  </TouchableHighlight>
                ))}
              </LinearLayout>
            </LinearLayout>
          ) : (
            <LinearLayout
              orientation="horizontal"
              alignItems="center"
              style={styles.loadingContainer}
            >
              <Spinner size="large" style={styles.spinner} />
              <Text style={styles.loadingText}>{loadingText}</Text>
            </LinearLayout>
          )}
        </View>
      </ScrollView>
    </RNModal>
  );
};

Modal.defaultProps = {
  onBackButtonPress: doNothing,
  onBackdropPress: doNothing,
  isLoading: false,
  loadingText: 'Processing your request.',
  children: null,
};

Modal.propTypes = {
  // title of the modal
  title: PropTypes.string,

  // description/message of the modal
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),

  // shows/hides the modal
  isVisible: PropTypes.bool,

  // icon above the title
  icon: PropTypes.any,

  // buttons to execute actions inside the modal
  actionButtons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      textColor: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
      onPress: PropTypes.func.isRequired,
    }).isRequired,
  ).isRequired,

  // function to call if back button was pressed
  onBackButtonPress: PropTypes.func,

  // function to call if backdrop was pressed
  onBackdropPress: PropTypes.func,

  // hides/shows spinner
  isLoading: PropTypes.bool,

  // text to show below the spinner when loading
  loadingText: PropTypes.string,

  // children to display
  children: PropTypes.any,
};
