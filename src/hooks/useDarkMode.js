import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';

const useDarkMode = toggle => {
    const [ storedDarkMode, setStoredDarkMode ] = useLocalStorage('darkmode', toggle);

    useEffect(() => {
        if(storedDarkMode) {
            document.body.classList.add('dark-mode');
        }
        else {
            document.body.classList.remove('dark-mode');
        }
    }, [storedDarkMode]);

    return [storedDarkMode, setStoredDarkMode];
};

export default useDarkMode;
