import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const Menu = ({ children }) => {
    return <nav className={cx('list-menu')}>{children}</nav>;
};

Menu.propTypes = {
    children: PropTypes.any,
};

export default Menu;
