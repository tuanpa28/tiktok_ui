import { useState, useEffect } from 'react';
import styles from './Toggle.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Toggle = () => {
    const [darkMonde, setDarkMode] = useState(JSON.parse(localStorage.getItem('data-theme')) || false);

    useEffect(() => {
        const htmlElement = document.querySelector('html');
        darkMonde ? htmlElement.setAttribute('data-theme', 'dark') : htmlElement.removeAttribute('data-theme');
    }, [darkMonde]);

    const handleTheme = () => {
        localStorage.setItem('data-theme', JSON.stringify(!darkMonde));
        const theme = JSON.parse(localStorage.getItem('data-theme')) || false;
        setDarkMode(theme);
    };

    return (
        <label className={cx('switch')}>
            <input type="checkbox" onChange={handleTheme} />
            <span className={cx('slider')}></span>
        </label>
    );
};

export default Toggle;
