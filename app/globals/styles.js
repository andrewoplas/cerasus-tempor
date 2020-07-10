const colors = {
  $primaryRed: '#e43d2c',
  $primaryOrange: '#ff6624',
  $primaryGreen: '#2ecc71',
  $primaryYellow: '#fec63d',
  $primaryBlue: '#1464f6',
  $primaryBlack: '#313131',
  $headerColor: '#414141',

  $primaryLighterGray: '#ebebeb',
  $primaryLightGray: '#d6d6d6',
  $primaryGray: '#929292',
  $primaryDarkGray: '#606060',

  $screenBackgroundColor: '#fafafa',
  $disabledColor: '#c0c0c0',
};

// const margin = {};
const padding = { $paddingHorizontal: 25 };

const textSize = {
  $textSize: 12,
  $headerTextSize: 18,
  $subheaderTextSize: 14,
  $emptyIconSize: 160,
};
const font = {
  $fontNumber: 'OpenSans-Regular',
  $fontNumberBold: 'OpenSans-Bold',
  $fontLight: 'TTNorms-Light',
  $fontLightItalic: 'TTNorms-LightItalic',
  $fontRegular: 'TTNorms-Regular',
  $fontItalic: 'TTNorms-Italic',
  $fontMedium: 'TTNorms-Medium',
  $fontMediumItalic: 'TTNorms-MediumItalic',
  $fontSemiBold: 'TTNorms-Bold',
  $fontSemiBoldItalic: 'TTNorms-BoldItalic',
  $fontBold: 'TTNorms-Bold',
  $fontBoldItalic: 'TTNorms-BoldItalic',
};

export default {
  ...colors,
  ...textSize,
  ...font,
  ...padding,
};
