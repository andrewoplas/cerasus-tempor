import { Dimensions } from 'react-native';
const { width: screenWidth } = Dimensions.get('window');

const slideInLeftBig = {
  from: {
    translateX: screenWidth,
  },
  to: {
    translateX: 0,
  },
};

const slideOutLeftBig = {
  from: {
    translateX: 0,
  },
  to: {
    translateX: -screenWidth,
  },
};

const slideInRightBig = {
  from: {
    translateX: -screenWidth,
  },
  to: {
    translateX: 0,
  },
};

const slideOutRightBig = {
  from: {
    translateX: 0,
  },
  to: {
    translateX: screenWidth,
  },
};

export const getStepsAnimation = (currentPageIndex, targetPageIndex) =>
  currentPageIndex < targetPageIndex
    ? { current: slideOutLeftBig, target: slideInLeftBig }
    : { current: slideOutRightBig, target: slideInRightBig };
