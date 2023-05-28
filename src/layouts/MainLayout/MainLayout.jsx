import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import styles from './MainLayout.module.scss';
import classNames from 'classnames/bind';
import DownloadApp from '~/components/DownloadApp/DownloadApp';
import FormModal from '~/components/FormModal/FormModal';
import { useState } from 'react';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const MainLayout = ({ children }) => {
    const [toggle, setToggle] = useState(true);

    return (
        <>
            <div className={cx('wrapper')}>
                <Header setToggle={setToggle} />
                <div className={cx('container')}>
                    <Sidebar />
                    {children}
                </div>
                <DownloadApp />
            </div>
            <FormModal toggle={toggle} setToggle={setToggle} />
        </>
    );
};

MainLayout.propTypes = {
    children: PropTypes.any,
};

export default MainLayout;
