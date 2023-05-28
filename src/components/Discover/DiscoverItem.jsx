import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const DiscoverItem = ({ text, icon }) => {
    return (
        <Link className={cx('discover-item')}>
            <div className={cx('item')}>
                {icon}
                <p className={cx('text')}>{text}</p>
            </div>
        </Link>
    );
};

DiscoverItem.propTypes = {
    text: PropTypes.any,
    icon: PropTypes.any,
};

export default DiscoverItem;
