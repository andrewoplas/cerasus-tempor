import PropTypes from 'prop-types';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { RFValue } from 'react-native-responsive-fontsize';
import { LinearLayout, Text } from '../../../components/elements';

const styles = EStyleSheet.create({
  main: {
    color: '#fff',
    fontSize: RFValue(85),
    marginRight: 10,
  },

  seconds: {
    color: '#fff',
    fontSize: RFValue(20),
    marginBottom: 20,
  },

  label: {
    color: '#F0F0F0',
    fontSize: RFValue(10),
    marginLeft: 5,
    marginBottom: -15,
  },
});

export const TimeNumber = ({ label, time, main }) =>
  main ? (
    <LinearLayout>
      <Text fontWeight="light" style={styles.label}>
        {label}
      </Text>
      <Text fontWeight="numberBold" style={styles.main}>
        {time < 10 ? `0${time}` : time}
      </Text>
    </LinearLayout>
  ) : (
    <Text fontWeight="number" align="center" style={styles.seconds}>
      {time < 10 ? `0${time}` : time}
    </Text>
  );

TimeNumber.defaultProps = {
  main: false,
};

TimeNumber.propTypes = {
  label: PropTypes.string,
  time: PropTypes.number,
  main: PropTypes.bool,
};
