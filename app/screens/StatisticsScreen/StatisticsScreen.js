import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Container } from '../../components/elements';
import { Header } from '../../components/Header/Header';
import { TimeList } from '../../components/TimeList';
import { selectors } from '../../ducks/time';

const StatisticsScreen = ({ times }) => (
  <Container>
    <Header title="Statistics" />
    <TimeList times={times} />
  </Container>
);

StatisticsScreen.propTypes = {
  times: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  times: selectors.selectTimes(),
});

export default connect(mapStateToProps, null)(StatisticsScreen);
