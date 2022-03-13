import React, {useState, useEffect} from 'react'

const useTheme = () => {
    const [theme, setTheme] = useState('light' );


  const setMode = mode => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  }

    const handleChange = () => {
        theme === 'dark' ? setMode('light') : setMode('dark');
    }
 useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme ? setTheme(localTheme) : setMode('dark');
  }, []);
  

  return [theme, handleChange]
}

export default useTheme