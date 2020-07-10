import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { RFValue } from 'react-native-responsive-fontsize';
import { getTimeNumberString } from '../../utils/functions';
import { LinearLayout, Text } from '../elements';

const styles = EStyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: '$paddingHorizontal',
    paddingVertical: 15,
    backgroundColor: '#fff',
  },

  icon: {
    marginRight: 5,
    fontSize: RFValue(20),
  },

  hideIcon: {
    opacity: 0,
  },

  date: {
    color: '$primaryGray',
  },

  timeDivider: {
    marginTop: 2,
    marginHorizontal: 10,
  },

  timeLabel: {
    color: '$primaryGray',
  },
});

export const ListItem = ({ title, startDate, hours, minutes, seconds }) => (
  <LinearLayout
    orientation="horizontal"
    alignItems="center"
    justifyContent="space-between"
    style={styles.container}
  >
    <LinearLayout>
      <Text kind="h4" fontWeight="bold">
        {title}
      </Text>
      <Text style={styles.date}>{moment(startDate).format('MMMM DD, YYYY')}</Text>
    </LinearLayout>
    <LinearLayout orientation="horizontal" alignItems="flex-start">
      <LinearLayout justifyContent="center" alignItems="center">
        <Text kind="h4" fontWeight="bold">
          {getTimeNumberString(hours)}
        </Text>
        <Text kind="small" style={styles.timeLabel}>
          H
        </Text>
      </LinearLayout>

      <Text style={styles.timeDivider}>:</Text>

      <LinearLayout justifyContent="center" alignItems="center">
        <Text kind="h4" fontWeight="bold">
          {getTimeNumberString(minutes)}
        </Text>
        <Text kind="small" style={styles.timeLabel}>
          M
        </Text>
      </LinearLayout>

      <Text style={styles.timeDivider}>:</Text>

      <LinearLayout justifyContent="center" alignItems="center">
        <Text kind="h4" fontWeight="bold">
          {getTimeNumberString(seconds)}
        </Text>
        <Text kind="small" style={styles.timeLabel}>
          S
        </Text>
      </LinearLayout>
    </LinearLayout>
  </LinearLayout>
);

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  startDate: PropTypes.object.isRequired,
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
};
