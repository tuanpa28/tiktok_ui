import classNames from 'classnames/bind';
import styles from './FormModal.module.scss';
import { CloseIcon } from '../Icons';
import Button from '../Button';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const FormModal = ({ toggle, setToggle }) => {
    if (toggle) return;
    return (
        <div className={cx('modal-mask')}>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('inner')}>
                        <p className={cx('title')}>Log in to TikTok</p>
                        <div className={cx('list')}>
                            <Button>Use QR code</Button>
                            <Button>Use phone / email / username</Button>
                            <Button>Continue with Facebook</Button>
                            <Button>Continue with Google</Button>
                            <Button>Continue with Twitter</Button>
                            <Button>Continue with LINE</Button>
                            <Button>Continue with KakaoTalk</Button>
                            <Button>Continue with Apple</Button>
                            <Button>Continue with Instagram</Button>
                        </div>
                    </div>
                    <div className={cx('footer')}>
                        <div className={cx('notify')}>
                            Don’t have an account?
                            <p className={cx('signup-btn')}>Sign up</p>
                        </div>
                    </div>
                </div>
                <div onClick={() => setToggle(true)} className={cx('close-btn')}>
                    <CloseIcon />
                </div>
            </div>
        </div>
    );
};

FormModal.propTypes = {
    toggle: PropTypes.any,
    setToggle: PropTypes.any,
};

export default FormModal;
