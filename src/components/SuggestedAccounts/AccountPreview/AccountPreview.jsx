import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const AccountPreview = ({ data, ...props }) => {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    src={data.avatar ?? data.user.avatar}
                    alt={`${data.first_name ?? data.user.first_name} ${data.last_name ?? data.user.last_name}`}
                />
                <Button className={cx('follow-btn')} {...props}>
                    Follow
                </Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>{data.nickname ?? data.user.nickname}</strong>
                    {(data.tick || data.user?.tick) && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </p>
                <p className={cx('name')}>{`${data.first_name ?? data.user.first_name} ${
                    data.last_name ?? data.user.last_name
                }`}</p>
            </div>
            <p className={cx('analytics')}>
                <strong className={cx('value')}>{data.followings_count ?? data.user.followings_count} </strong>
                <span className={cx('label')}>Followers</span>
                <strong className={cx('value')}>{data.likes_count ?? data.user.likes_count} </strong>
                <span className={cx('label')}>Likes</span>
            </p>
            {data.user?.bio && (
                <div className={cx('footer')}>
                    <p className={cx('bio')}>{data.user?.bio}</p>
                </div>
            )}
        </div>
    );
};

AccountPreview.propTypes = {
    data: PropTypes.any,
};

export default AccountPreview;
