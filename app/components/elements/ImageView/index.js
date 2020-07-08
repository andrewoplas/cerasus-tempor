import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import { Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectors } from '../../../ducks/token';

const ImageView = ({ uri, token, viewable, style, containerStyle }) => {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      disabled={!viewable}
      underlayColor="transparent"
      onPress={() => navigation.navigate('ViewImageModal', { imageUri: uri })}
      style={containerStyle}
    >
      <Image
        style={style}
        source={{
          uri,
          headers: { Authorization: `Bearer ${token}` },
        }}
      />
    </TouchableHighlight>
  );
};

ImageView.defaultProps = {
  viewable: false,
};

ImageView.propTypes = {
  uri: PropTypes.string.isRequired,
  token: PropTypes.string,
  viewable: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const mapStateToProps = createStructuredSelector({
  token: selectors.selectToken(),
});

export default connect(mapStateToProps, null)(ImageView);
