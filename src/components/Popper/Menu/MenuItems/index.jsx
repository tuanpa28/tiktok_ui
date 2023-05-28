import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from '../Menu.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const MenuItem = ({ data, onClick }) => {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <div className={cx('menu')}>
            <Button className={classes} LeftIcon={data.icon} to={data.to} onClick={onClick}>
                {data.title}
            </Button>
            {data.toggle}
        </div>
    );
};
MenuItem.propTypes = {
    data: PropTypes.any,
    onClick: PropTypes.any,
};

export default MenuItem;
