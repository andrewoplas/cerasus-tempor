import PropTypes from 'prop-types';
import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Container } from '../../components/elements';
import { Header } from '../../components/Header/Header';
import { ListItem } from '../../components/ListItem/ListItem';
import { selectors } from '../../ducks/time';

const SaveLaterScreen = ({ times }) => (
  <Container>
    <Header title="Save Later" />
    <FlatList
      data={times}
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
  </Container>
);

SaveLaterScreen.propTypes = {
  times: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  times: selectors.selectSavedLaterTimes(),
});

export default connect(mapStateToProps, null)(SaveLaterScreen);
