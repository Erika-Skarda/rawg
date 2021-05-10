import { createContext, useEffect, useState, useContext } from 'react';

const toggleBodyClasses = isDarkMode => {
  if (isDarkMode) {
    // here's a good place to add a dark-mode css classes to our <body> and remove light mode
    document.body.classList.add('bg-dark', 'text-light');
    document.body.classList.remove('bg-light', 'text-dark');
  } else {
    // remove the dark mode classes, add light mode
    document.body.classList.add('bg-light', 'text-dark');
    document.body.classList.remove('bg-dark', 'text-light');
  }

};

const defaultContextData = {
  dark: false,
  toggle: () => {}
};

const DarkModeContext = createContext(defaultContextData);
export const useDarkMode = () => useContext(DarkModeContext);

const useEffectDarkMode = () => {
  const [darkModeState, setDarkModeState] = useState({
    dark: false,
    hasDarkModeMounted: false
  });

  useEffect(() => {
      // remember our current dark mode status in the browser local storage
    const localStorageDark = localStorage.getItem("dark") === "true";
    toggleBodyClasses(localStorageDark)

    setDarkModeState({dark: localStorageDark, hasDarkModeMounted: true});
  }, []);

  return [darkModeState, setDarkModeState];
};

export function DarkModeProvider ({ children }) {
  const [darkModeState, setDarkModeState] = useEffectDarkMode();

  if (!darkModeState.hasDarkModeMounted) {
    return <div />;
  }

  const toLightMode = () => {
    if (darkModeState.dark) {
      toggle()
    }
  }
  const toDarkMode = () => {
    if (!darkModeState.dark) {
      toggle()
    }
  }
  const toggle = () => {
    const dark = !darkModeState.dark;
    // remember our current dark mode status in the browser local storage
    localStorage.setItem("dark", JSON.stringify(dark));
    
    toggleBodyClasses(dark)

    setDarkModeState({ ...darkModeState, dark, bgColor:lsBgColor, textColor:lsTextColor });
  };
  return (
      <DarkModeContext.Provider
        value={{
          dark: darkModeState.dark,
          toDark: toDark,
          toLight: toLight,
          toggle: toggle
        }}
      >
        {children}
      </DarkModeContext.Provider>
  );
};