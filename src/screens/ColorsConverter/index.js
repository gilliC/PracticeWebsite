import React, { createContext, useState } from 'react';
import { ColorsConverterContent } from './ColorsConverterContent';

const ColorsConverterContext = createContext();
export const ColorsConverterProvider = ColorsConverterContext.Provider;
export const ColorsConverterConsumer = ColorsConverterContext.Consumer;

export const ColorsConverter = () => {
  const [store, setStore] = useState({ color: '', colorBrightness: '' });
  return (
    <ColorsConverterProvider value={{ store, setStore }}>
      <ColorsConverterConsumer>
        {context => {
          const { store } = context;
          return <ColorsConverterContent store={store} />;
        }}
      </ColorsConverterConsumer>
    </ColorsConverterProvider>
  );
};
