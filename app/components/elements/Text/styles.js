import EStyleSheet from 'react-native-extended-stylesheet';
import { RFValue } from 'react-native-responsive-fontsize';
import memoize from 'lodash/memoize';

const fontSizes = {
  h1: RFValue(40),
  h2: RFValue(30),
  h3: RFValue(25),
  h4: RFValue(20),
  paragraph: RFValue(14),
  small: RFValue(12),
};

const fontWeight = {
  light: 'ProximaNova-Light',
  normal: 'ProximaNova-Regular',
  bold: 'ProximaNova-Bold',
  number: 'OpenSans-Regular',
  numberBold: 'OpenSans-Bold',
};

export const getTextStyle = memoize((key, size, weight, align) =>
  EStyleSheet.create({
    fontSize: fontSizes[size],
    fontFamily: fontWeight[weight],
    textAlign: align,
    color: EStyleSheet.value('$themeHeaderColor'),
  }),
);
