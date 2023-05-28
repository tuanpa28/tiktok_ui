import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
import DiscoverItem from './DiscoverItem';
import { MusicIcon, HashtagIcon } from '../Icons';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const Discover = ({ label }) => {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <div className={cx('list-discover')}>
                <DiscoverItem text="suthatla" icon={<HashtagIcon className={cx('icon')} />} />
                <DiscoverItem text="mackedoi" icon={<HashtagIcon className={cx('icon')} />} />
                <DiscoverItem text="sansangthaidoi" icon={<HashtagIcon className={cx('icon')} />} />
                <DiscoverItem
                    classNam
                    text="Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n & BHMedia"
                    icon={<MusicIcon className={cx('icon')} />}
                />
                <DiscoverItem
                    classNam
                    text="Thiên Thần Tình Yêu - RICKY STAR ạnd T.R.I"
                    icon={<MusicIcon className={cx('icon')} />}
                />
                <DiscoverItem text="Anh Yêu Vội Thế (Mee Remix)" icon={<MusicIcon className={cx('icon')} />} />
                <DiscoverItem text="7749hieuung" icon={<HashtagIcon className={cx('icon')} />} />
                <DiscoverItem text="genzlife" icon={<HashtagIcon className={cx('icon')} />} />

                <DiscoverItem
                    classNam
                    text="Vui Lắm Nha (TikTok Remix 1) - Hương Ly & Jombie"
                    icon={<MusicIcon className={cx('icon')} />}
                />
                <DiscoverItem
                    classNam
                    text="Con Bướm Xuân (Remix) - Cukak & H2K & BHMedia"
                    icon={<MusicIcon className={cx('icon')} />}
                />
            </div>
        </div>
    );
};

Discover.propTypes = {
    label: PropTypes.any,
};

export default Discover;
