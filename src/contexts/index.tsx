import React from 'react';

import { CartProvider } from './CartContext';
import { WindowDimensionProvider } from './WindowDimensionContext';

const AppProvider: React.FC = ({ children }) => (
  <WindowDimensionProvider>
    <CartProvider>{children}</CartProvider>
  </WindowDimensionProvider>
);

export default AppProvider;
