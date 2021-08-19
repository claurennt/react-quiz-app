import { createContext, useState, useContext } from 'react';

const AppThemeContext = createContext();

const useThemeContext = () => useContext(AppThemeContext);

// create common style for entire app
const AppThemeContextProvider = ({ children }) => {
  const AppTheme = {
    body: {
      textAlign: 'center',
      fontFamily: 'Raleway, sansSerif',
      height: '100vh',
      backgroundColor: '#29314A',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      border: '1px #0FC1B7 thin',
      padding: '20px',
      positon: 'relative',
      height: '90vh',
      width: '30%',
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'center',
      placeContent: 'space-evenly',
      fontSize: '1.2rem',
      color: '#0FC1B7',
    },
  };

  return (
    <div style={AppTheme.body}>
      <div style={AppTheme.content}>{children}</div>
    </div>
  );
};

export { AppThemeContextProvider, useThemeContext };
