"use client"
import { createContext, useState } from 'react';

export const themeContext = createContext();

export default function ThemeProvider({ children }) {

  const [Theme, setTheme] = useState(false);

  let toggleTheme = function(){
    if(Theme === false){
      setTheme(true);
    }else if (Theme === true){
      setTheme(false);
    }
  }

  return (
    <>
    <themeContext.Provider value = {{
      Theme,
      toggleTheme,
    }}>
      {children}
    </themeContext.Provider>
    </>
  )
}
