import EStyleSheet from 'react-native-extended-stylesheet';
import { RFValue } from 'react-native-responsive-fontsize';
import memoize from 'lodash/memoize';

const fontSizes = {
  h1: RFValue(30),
  h2: RFValue(25),
  h3: RFValue(20),
  h4: RFValue(17),
  paragraph: RFValue(14),
  small: RFValue(12),
};

const fontWeight = {
  light: 'TTNorms-Light',
  normal: 'TTNorms-Regular',
  medium: 'TTNorms-Medium',
  semiBold: 'TTNorms-Bold',
  bold: 'TTNorms-Bold',
};

export const getTextStyle = memoize((key, size, weight, align) =>
  EStyleSheet.create({
    fontSize: fontSizes[size],
    fontFamily: fontWeight[weight],
    textAlign: align,
    color: EStyleSheet.value('$headerColor'),
  }),
);
