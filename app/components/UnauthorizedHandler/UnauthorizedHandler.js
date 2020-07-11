// import PropTypes from 'prop-types';
// import React, { useState } from 'react';
// import { View } from 'react-native-animatable';
// import EStyleSheet from 'react-native-extended-stylesheet';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { NavigationActions, StackActions } from 'react-navigation';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { getUserAuthStatus } from '../../ducks';
// import { actions as usersActions } from '../../ducks/user';
// import messages from '../../globals/messages';
// import { Modal } from '../Modal';

// const UnauthorizedHandlerComponent = ({ navigation, logoutRequest, isAuthorized, children }) => {
//   // State
//   const [inactiveModal, showInactiveModal] = useState(false);

//   // Variables
//   const INACTIVE_ACTIONS = [
//     {
//       name: 'Ok',
//       color: EStyleSheet.value('$themeBlack'),
//       onPress: () => {
//         logout();
//       },
//     },
//   ];

//   // Methods
//   const onUnauthorized = () => {
//     if (!inactiveModal) showInactiveModal(true);
//   };

//   const logout = () => {
//     logoutRequest();
//     showInactiveModal(false);
//     const resetAction = StackActions.reset({
//       index: 0,
//       actions: [NavigationActions.navigate({ routeName: 'Login' })],
//     });
//     navigation.dispatch(resetAction);
//   };

//   if (isAuthorized !== undefined && !isAuthorized) {
//     onUnauthorized();
//   }

//   return (
//     <View style={{ flex: 1 }}>
//       {children}

//       <Modal
//         isVisible={inactiveModal}
//         icon={<Icon name="md-alert" size={25} color={EStyleSheet.value('$themeRed')} />}
//         title="Access Token Expired"
//         message={messages.UNAUTHORIZED}
//         actionButtons={INACTIVE_ACTIONS}
//       />
//     </View>
//   );
// };

// UnauthorizedHandlerComponent.propTypes = {
//   isAuthorized: PropTypes.bool.isRequired,
//   children: PropTypes.any.isRequired,
//   logoutRequest: PropTypes.func.isRequired,
//   navigation: PropTypes.object.isRequired,
// };

// const mapStateToProps = store => ({
//   isAuthorized: getUserAuthStatus(store),
// });

// const mapDispatchToProps = dispatch => ({
//   ...bindActionCreators(
//     {
//       logoutRequest: usersActions.logout,
//     },
//     dispatch,
//   ),
// });

// export const UnauthorizedHandler = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(UnauthorizedHandlerComponent);
