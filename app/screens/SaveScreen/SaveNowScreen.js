import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Container } from '../../components/elements';
import { Header } from '../../components/Header/Header';
import { TimeList } from '../../components/TimeList';
import { selectors } from '../../ducks/time';

const SaveNowScreen = ({ times }) => (
  <Container>
    <Header title="Save Now" />
    <TimeList times={times} />
  </Container>
);

SaveNowScreen.propTypes = {
  times: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  times: selectors.selectSavedNowTimes(),
});

export default connect(mapStateToProps, null)(SaveNowScreen);
