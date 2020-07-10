import PropTypes from 'prop-types';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { RFValue } from 'react-native-responsive-fontsize';
import AntdIcon from 'react-native-vector-icons/AntDesign';
import { LinearLayout, Text } from '../elements';

const styles = EStyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: '$paddingHorizontal',
  },

  icon: {
    marginRight: 5,
    fontSize: RFValue(20),
  },

  hideIcon: {
    opacity: 0,
  },

  title: {
    fontSize: RFValue(17),
  },
});

export const Header = ({ title }) => (
  <LinearLayout
    orientation="horizontal"
    alignItems="center"
    justifyContent="space-between"
    style={styles.container}
  >
    <AntdIcon name="arrowleft" style={styles.icon} />
    <Text fontWeight="medium" align="center" style={styles.title}>
      {title}
    </Text>
    <AntdIcon name="arrowleft" style={styles.hideIcon} />
  </LinearLayout>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
