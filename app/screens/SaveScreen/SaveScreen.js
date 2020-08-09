import PropTypes from 'prop-types';
import React from 'react';
import { Alert } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Container } from '../../components/elements';
import { Header } from '../../components/Header/Header';
import { TimeList } from '../../components/TimeList';
import { actions, selectors } from '../../ducks/time';

const SaveScreen = ({ times, deleteTime }) => {
  const onDelete = (name, id) => {
    Alert.alert(
      'Delete Entry',
      `Are you sure you want to remove ${name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Yes', onPress: () => deleteTime(id) },
      ],
      { cancelable: false },
    );
  };

  return (
    <Container styleBackground={{ backgroundColor: EStyleSheet.value('$themeGreen') }}>
      <Header title="Saved Entries" />
      <TimeList times={times} onDelete={onDelete} />
    </Container>
  );
};

SaveScreen.propTypes = {
  times: PropTypes.array.isRequired,
  deleteTime: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  times: selectors.selectTimes(),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ deleteTime: actions.deleteTime }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SaveScreen);
