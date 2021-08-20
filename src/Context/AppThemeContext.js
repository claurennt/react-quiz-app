import { createContext, useContext } from 'react';

const AppThemeContext = createContext();

const useThemeContext = () => useContext(AppThemeContext);

// create common style for entire app
const ThemeContextProvider = ({ children }) => {
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
      padding: '20px',
      positon: 'relative',
      height: '90vh',
      width: '40vw',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      placeContent: 'space-evenly',
      fontSize: '1.5vw',
      color: '#0FC1B7',
    },
  };
  // border: '1px #0FC1B7 solid',
  return (
    <div style={AppTheme.body}>
      <div style={AppTheme.content}>{children}</div>
    </div>
  );
};

export { ThemeContextProvider, useThemeContext };
