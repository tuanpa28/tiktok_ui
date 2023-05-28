import classNames from 'classnames/bind';
import styles from './FollowingAccounts.module.scss';
import AccountItem from './AccountItem';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const FollowingAccounts = ({ label }) => {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <p className={cx('more-btn')}>See more</p>
        </div>
    );
};

FollowingAccounts.propTypes = {
    label: PropTypes.any,
};

export default FollowingAccounts;
