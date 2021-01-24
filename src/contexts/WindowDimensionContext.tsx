import React, { createContext, useState, useEffect, useContext } from 'react';

interface WindowDimensionContextData {
  windowWidth: number;
  windowHeight: number;
}

const WindowDimensionContext = createContext<WindowDimensionContextData>(
  {} as WindowDimensionContextData,
);

export const WindowDimensionProvider: React.FC = ({ children }) => {
  const getWindowWidth = (): number => {
    const { innerWidth } = window;

    return innerWidth;
  };

  const getWindowHeight = (): number => {
    const { innerHeight } = window;

    return innerHeight;
  };

  const [windowWidth, setWindowWidth] = useState<number>(getWindowWidth());
  const [windowHeight, setWindowHeight] = useState<number>(getWindowHeight());

  useEffect(() => {
    function handleResize(): void {
      setWindowWidth(getWindowWidth());
      setWindowHeight(getWindowHeight());
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [getWindowWidth]);

  return (
    <WindowDimensionContext.Provider value={{ windowWidth, windowHeight }}>
      {children}
    </WindowDimensionContext.Provider>
  );
};

export function useWindow(): WindowDimensionContextData {
  const context = useContext(WindowDimensionContext);

  return context;
}
