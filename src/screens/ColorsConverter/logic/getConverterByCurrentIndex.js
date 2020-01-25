import React from 'react';
import FromHexToRGBANHSL from '../FromHexToRGBAnHSL';
import { ConvertHexToXTerm } from '../components/ConvertHexToXTerm';

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
      return <FromHexToRGBANHSL type="RGBA" key={1} />;
    case HEX_TO_HSL:
      return <FromHexToRGBANHSL type="HSL" key={2} />;
    default:
      return <FromHexToRGBANHSL type="HSL" key={2} />;
  }
};
