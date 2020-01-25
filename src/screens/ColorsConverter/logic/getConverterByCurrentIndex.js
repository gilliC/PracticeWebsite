import React from 'react';
import { ConvertHexToXTerm } from '../components/ConvertHexToXTerm';
import { ConvertHexToRgbaOrHsl } from '../components/ConvertHexToRgbaOrHsl';

const converterIndexes = {
  HEX_TO_EXTERM: 0,
  HEX_TO_RGBA: 1,
  HEX_TO_HSL: 2,
};

export const getConverterByCurrentIndex = index => {
  const { HEX_TO_EXTERM, HEX_TO_RGBA, HEX_TO_HSL } = converterIndexes;
  switch (index) {
    case HEX_TO_EXTERM:
      return <ConvertHexToXTerm />;
    case HEX_TO_RGBA:
      return <ConvertHexToRgbaOrHsl type="RGBA" key={1} />;
    case HEX_TO_HSL:
      return <ConvertHexToRgbaOrHsl type="HSL" key={2} />;
    default:
      return <ConvertHexToRgbaOrHsl type="RGBA" key={1} />;
  }
};
