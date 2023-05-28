import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const Button = ({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    outlineGrey = false,
    disabled = false,
    rounded = false,
    className,
    LeftIcon,
    children,
    onClick,
    ...passProps
}) => {
    let Comp = 'button';
    const props = { onClick, ...passProps };

    //Remove event listener when btn is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        small,
        large,
        outlineGrey,
        disabled,
        rounded,
    });

    return (
        <Comp className={classes} {...props}>
            {LeftIcon && <span className={cx('icon')}>{LeftIcon}</span>}
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
};

Button.propTypes = {
    to: PropTypes.any,
    href: PropTypes.any,
    primary: PropTypes.any,
    outline: PropTypes.any,
    small: PropTypes.any,
    large: PropTypes.any,
    text: PropTypes.any,
    outlineGrey: PropTypes.any,
    disabled: PropTypes.any,
    rounded: PropTypes.any,
    className: PropTypes.any,
    LeftIcon: PropTypes.any,
    children: PropTypes.any,
    onClick: PropTypes.any,
};

export default Button;
