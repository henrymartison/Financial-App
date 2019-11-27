import { Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('screen');

const fontSizeResponsive = value => {
  const tempHeight = (16 / 9) * width;
  return Math.sqrt(tempHeight ** 2 + width ** 2) * (value / 100);
};

export {fontSizeResponsive as fsr}