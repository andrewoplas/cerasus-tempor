import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { LinearLayout } from '../elements/LinearLayout';
import { Button } from '../elements/Button';

const styles = EStyleSheet.create({
  container: {
    margin: 16,
    alignItems: 'center',
  },

  inputContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 8,
    alignItems: 'center',
  },

  input: {
    flex: 1,
    color: '$primaryBlack',
  },

  clearButtonContainer: {
    backgroundColor: 'transparent',
    padding: 4,
    borderRadius: 0,
    justifyContent: 'center',
  },

  searchButtonContainer: {
    minWidth: 48,
    minHeight: 48,
    padding: 8,
    marginLeft: 4,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
  },
});

export const SearchInput = ({
  inputRef,
  fieldKey,
  value,
  containerStyle,
  searchButtonContainerStyle,
  placeholder,
  onClear,
  onSearch,
  onHandleChange,
  ...rest
}) => {
  const [canClear, setCanClear] = useState(false);
  return (
    <LinearLayout orientation="horizontal" style={[styles.container]}>
      <LinearLayout orientation="horizontal" style={[styles.inputContainer, containerStyle]}>
        <TextInput
          ref={inputRef}
          value={value}
          style={[styles.input]}
          maxLength={128}
          returnKeyType="search"
          onChangeText={(text) => {
            setCanClear(text.length !== 0);
            onHandleChange(fieldKey, text);
          }}
          onSubmitEditing={onSearch}
          placeholder={placeholder}
          blurOnSubmit
          {...rest}
        />
        {canClear && (
          <Button
            onPress={() => {
              setCanClear(false);
              onClear();
            }}
            style={styles.clearButtonContainer}
            leftIcon={
              <AntDesignIcon
                style={styles.icon}
                name="closecircle"
                color={EStyleSheet.value('$primaryRed')}
                size={16}
              />
            }
          />
        )}
      </LinearLayout>
      <Button
        onPress={onSearch}
        style={[styles.searchButtonContainer, searchButtonContainerStyle]}
        leftIcon={
          <AntDesignIcon
            style={styles.icon}
            name="search1"
            color={EStyleSheet.value('$primaryRed')}
            size={24}
          />
        }
      />
    </LinearLayout>
  );
};

SearchInput.defaultProps = {};

SearchInput.propTypes = {
  value: PropTypes.string,
  inputRef: PropTypes.object,
  fieldKey: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onClear: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onHandleChange: PropTypes.func.isRequired,
  searchButtonContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
