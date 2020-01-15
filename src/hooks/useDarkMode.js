import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';

const useDarkMode = toggle => {
    const [ storedDarkMode, setStoredDarkMode ] = useLocalStorage('darkmode', toggle);

    const setDarkMode = toggle => {
        setStoredDarkMode(toggle);
        useEffect(() => {
            if(toggle) {
                document.body.classList.add('dark-mode');
            }
            else {
                document.body.classList.remove('dark-mode');
            }
        }, [storedDarkMode]);
    };

    return [storedDarkMode, setDarkMode];
};

export default useDarkMode;
