import React, { createContext, useState, useEffect, useContext } from 'react';

interface WindowDimensionContextData {
  windowDimensions: number;
}

const WindowDimensionContext = createContext<WindowDimensionContextData>(
  {} as WindowDimensionContextData,
);

export const WindowDimensionProvider: React.FC = ({ children }) => {
  const getWindowDimensions = (): number => {
    const { innerWidth } = window;

    return innerWidth;
  };

  const [windowDimensions, setWindowDimensions] = useState<number>(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [getWindowDimensions]);

  return (
    <WindowDimensionContext.Provider value={{ windowDimensions }}>
      {children}
    </WindowDimensionContext.Provider>
  );
};

export function useWindow(): WindowDimensionContextData {
  const context = useContext(WindowDimensionContext);

  return context;
}
