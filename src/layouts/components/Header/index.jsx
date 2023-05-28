import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './Header.module.scss';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Toggle from '~/components/Toggle';
import 'tippy.js/dist/tippy.css';
import {
    MessageIcon,
    InboxIcon,
    ViewProfileIcon,
    FavoritesIcon,
    GetCoinIcon,
    SettingIcon,
    EnglishIcon,
    FeedbackIcon,
    KeyboardIcon,
    DarkModeIcon,
    LogoutIcon,
    PlusIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';
import config from '~/config';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <EnglishIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'vi', title: 'Tiếng việt' },
            ],
        },
    },
    {
        icon: <FeedbackIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <DarkModeIcon />,
        title: 'Dark mode',
        toggle: <Toggle />,
    },
];

const userMenu = [
    {
        icon: <ViewProfileIcon />,
        title: 'View profile',
        to: '@phamtuan.003',
    },
    {
        icon: <FavoritesIcon />,
        title: 'Favorites',
    },
    {
        icon: <GetCoinIcon />,
        title: 'Get coins',
        to: 'coin',
    },
    {
        icon: <SettingIcon />,
        title: 'Settings',
        to: 'setting',
    },
    ...MENU_ITEMS,
    {
        icon: <LogoutIcon />,
        title: 'Log out',
        to: 'logout',
        separate: true,
    },
];

const Header = ({ setToggle }) => {
    localStorage.setItem('isUser', JSON.stringify(true));
    const currentUser = JSON.parse(localStorage.getItem('isUser'));

    //handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //handle change language
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="Tiktok" />
                    </Link>
                </div>
                {/* Search */}
                <Search />
                <div className={cx('actions')}>
                    <Button outlineGrey LeftIcon={<PlusIcon />}>
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>3</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <Button onClick={() => setToggle(false)} primary>
                            Log in
                        </Button>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ae8943c9e6a432b9fefb620a0209dabf~c5_720x720.jpeg?x-expires=1684044000&x-signature=HJZU9tCNnwjSWwOUNdL7%2FitVReo%3D"
                                alt="Phạm Anh Tuấn"
                                fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    setToggle: PropTypes.any,
};

export default Header;
