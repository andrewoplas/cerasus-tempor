import PropTypes from 'prop-types';
import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from './ListItem';

export const TimeList = ({ times }) => (
  <FlatList
    data={times}
    contentContainerStyle={{ paddingBottom: 100 }}
    renderItem={({ item }) => (
      <ListItem
        title={item?.title}
        startDate={item?.startDate}
        endDate={item?.endDate}
        hours={item?.time?.hours}
        minutes={item?.time?.minutes}
        seconds={item?.time?.seconds}
      />
    )}
    keyExtractor={(item) => item.id}
  />
);

TimeList.propTypes = {
  times: PropTypes.array.isRequired,
};
