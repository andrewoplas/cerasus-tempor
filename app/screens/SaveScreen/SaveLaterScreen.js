import PropTypes from 'prop-types';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Container } from '../../components/elements';
import { Header } from '../../components/Header/Header';
import { TimeList } from '../../components/TimeList';
import { selectors } from '../../ducks/time';

const SaveLaterScreen = ({ times }) => (
  <Container styleBackground={{ backgroundColor: EStyleSheet.value('$themeGreen') }}>
    <Header title="Save Later" />
    <TimeList times={times} />
  </Container>
);

SaveLaterScreen.propTypes = {
  times: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  times: selectors.selectSavedLaterTimes(),
});

export default connect(mapStateToProps, null)(SaveLaterScreen);
