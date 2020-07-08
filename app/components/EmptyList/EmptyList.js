import PropTypes from 'prop-types';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LinearLayout } from '../elements/LinearLayout';
import { Text } from '../elements/Text';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },

  emptyMessageText: {
    fontSize: RFValue(15),
    color: '$primaryGray',
    textAlign: 'center',
  },

  icon: {
    alignSelf: 'center',
  },
});

export const EmptyList = ({ withIcon, message }) => (
  <LinearLayout style={styles.container}>
    {withIcon && (
      <Icon
        style={styles.icon}
        name="assignment"
        color={EStyleSheet.value('$primaryGray')}
        size={EStyleSheet.value('$emptyIconSize')}
      />
    )}
    <Text style={styles.emptyMessageText}>{message}</Text>
  </LinearLayout>
);

EmptyList.defaultProps = {
  withIcon: true,
  message: 'The list is empty.',
};

EmptyList.propTypes = {
  withIcon: PropTypes.bool,
  message: PropTypes.string,
};
