import PropTypes from 'prop-types';
import React from 'react';
import { FlatList, TouchableHighlight } from 'react-native';
import { ListItem } from './ListItem';

export const TimeList = ({ times, onDelete }) => (
  <FlatList
    data={times}
    contentContainerStyle={{ paddingBottom: 100 }}
    renderItem={({ item }) => (
      <TouchableHighlight
        underlayColor="transparent"
        onLongPress={() => onDelete(item.title, item.id)}
      >
        <ListItem
          title={item?.title}
          startDate={item?.startDate}
          endDate={item?.endDate}
          hours={item?.time?.hours}
          minutes={item?.time?.minutes}
          seconds={item?.time?.seconds}
        />
      </TouchableHighlight>
    )}
    keyExtractor={(item) => item.id}
  />
);

TimeList.propTypes = {
  times: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
