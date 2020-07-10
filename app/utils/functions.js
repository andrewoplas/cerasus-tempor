import Color from 'color';
import memoize from 'lodash/memoize';

export const doNothing = () => null;

/**
 * Calculates underlay color of button
 * @param {string} colorHex
 */
export const getButtonUnderlayColor = memoize((colorHex) => {
  const color = Color(colorHex);
  return color.isDark() ? color.lighten(0.5).hex() : color.darken(0.1).hex();
});

/**
 * Prepend zero to time if less than zero
 * @param {string} colorHex
 */
export const getTimeNumberString = (time) => (time < 10 ? `0${time}` : time);
