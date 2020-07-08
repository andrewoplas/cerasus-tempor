import Color from 'color';
import PropTypes from 'prop-types';
import React from 'react';
import { Picker as RNPicker } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { LinearLayout } from '../LinearLayout';

const styles = EStyleSheet.create({
  reasonPicker: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 4,
    backgroundColor: '#fff',
  },

  picker: {
    fontFamily: '$fontBold',
  },

  disabled: {
    backgroundColor: () => Color(EStyleSheet.value('$primaryGray')).lighten(0.7),
  },
});

const DEFAULT_ITEM_VALUE = -1;
const DEFAULT_ITEM_LABEL = 'Select an item';

export const Picker = ({
  onValueChange,
  value: selectedValue,
  items,
  defaultOptionText,
  disabled,
}) => (
  <LinearLayout
    style={[
      styles.reasonPicker,
      EStyleSheet.value('$shadowDepth1'),
      disabled ? styles.disabled : {},
    ]}
  >
    <RNPicker
      enabled={!disabled}
      selectedValue={selectedValue}
      onValueChange={(value, index) => {
        if (value !== DEFAULT_ITEM_VALUE && !items[index - 1]?.disabled) {
          onValueChange(value, index - 1);
        }
      }}
      style={styles.picker}
    >
      <RNPicker.Item
        label={defaultOptionText || DEFAULT_ITEM_LABEL}
        value={DEFAULT_ITEM_VALUE}
        color={EStyleSheet.value('$primaryLightGray')}
      />
      {items &&
        items.map(item => (
          <RNPicker.Item
            key={item.value}
            label={item.label}
            value={item.value}
            color={item?.disabled ? EStyleSheet.value('$primaryLightGray') : {}}
          />
        ))}
    </RNPicker>
  </LinearLayout>
);
Picker.defaultProps = {
  disabled: false,
  defaultOptionText: null,
};

Picker.propTypes = {
  onValueChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  items: PropTypes.array,
  defaultOptionText: PropTypes.string,
  disabled: PropTypes.bool,
};
