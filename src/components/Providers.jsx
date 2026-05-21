"use client";
import React from 'react'
import ThemeProvider, { themeContext } from '@/context/ThemeContext'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

export default function Providers({ children }) {

  return (
    <>
    <Provider store={store}>
      <ThemeProvider>
          {children}
      </ThemeProvider>
    </Provider>
    </>
  )
}
