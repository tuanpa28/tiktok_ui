import classNames from 'classnames/bind';
import styles from './DownloadApp.module.scss';
import Button from '../Button';
import { ScrollIcon } from '../Icons';
import { useEffect, useState, useRef } from 'react';

const cx = classNames.bind(styles);

const DownloadApp = () => {
    const scrollYRef = useRef(0);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            scrollYRef.current = window.scrollY;

            if (scrollYRef.current !== 0) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={cx('wrapper', { 'show-icon-scroll': scroll })}>
            <div className={cx('item')}>
                <Button outlineGrey rounded className={cx('download-btn')}>
                    Get app
                </Button>
            </div>
            <button onClick={scrollToTop} className={cx('icon')}>
                <ScrollIcon />
            </button>
        </div>
    );
};

export default DownloadApp;
