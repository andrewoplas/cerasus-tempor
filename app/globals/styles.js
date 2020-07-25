const colors = {
  $themeRed: '#e43d2c',
  $themeYellow: '#fca311',
  $themeBlack: '#313131',
  $themeHeaderColor: '#414141',
  $themeLightGray: '#e5e5e5',

  $themeGreen: '#56bda2',
  $themeTeal: '#2494a2',
  $themeDarkBlue: '#304b7a',

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
  $fontLight: 'ProximaNova-Light',
  $fontRegular: 'ProximaNova-Regular',
  $fontBold: 'ProximaNova-Bold',
};

export default {
  ...colors,
  ...textSize,
  ...font,
  ...padding,
};
