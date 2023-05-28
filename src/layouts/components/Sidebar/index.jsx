import config from '~/config';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
    ExploreIcon,
    ExploreActiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import Discover from '~/components/Discover';
import Button from '~/components/Button';
import FollowingAccounts from '~/components/FollowingAccounts';

const cx = classNames.bind(styles);

const Sidebar = () => {
    const currentUser = JSON.parse(localStorage.getItem('isUser'));
    return (
        <div className={cx('sidebar')}>
            <div className={cx('container-sidebar')}>
                <aside className={cx('wrapper')}>
                    <Menu>
                        <MenuItem
                            title="For You"
                            to={config.routes.home}
                            icon={<HomeIcon />}
                            activeIcon={<HomeActiveIcon />}
                        />
                        <MenuItem
                            title="Following"
                            to={config.routes.following}
                            icon={<UserGroupIcon />}
                            activeIcon={<UserGroupActiveIcon />}
                        />
                        <MenuItem
                            title="Explore"
                            to={config.routes.explore}
                            icon={<ExploreIcon />}
                            activeIcon={<ExploreActiveIcon />}
                        />
                        <MenuItem
                            title="LIVE"
                            to={config.routes.live}
                            icon={<LiveIcon />}
                            activeIcon={<LiveActiveIcon />}
                        />
                    </Menu>
                    {currentUser ? (
                        <>
                            <SuggestedAccounts label="Suggested accounts" />
                            <FollowingAccounts label="Following accounts" />
                        </>
                    ) : (
                        <>
                            <div className={cx('login-sidebar')}>
                                <p className={cx('login-sidebar-text')}>
                                    Log in to follow creators, like videos, and view comments.
                                </p>
                                <Button outline large className={cx('login-btn')}>
                                    Log in
                                </Button>
                            </div>
                            <SuggestedAccounts label="Suggested accounts" suggestSee="See all" />
                        </>
                    )}

                    <Discover label="Discover" />
                    <div className={cx('sidebar-footer')}>
                        <div className={cx('list-link')}>
                            <a className={cx('link-item')} href="#" target="_blank">
                                About
                            </a>
                            <a className={cx('link-item')} href="#" target="_blank">
                                Newsroom
                            </a>
                            <a className={cx('link-item')} href="#" target="_blank">
                                Contact
                            </a>
                            <a className={cx('link-item')} href="#" target="_blank">
                                Careers
                            </a>
                            <a className={cx('link-item')} href="#" target="_blank">
                                ByteDance
                            </a>
                        </div>
                        <div className={cx('list-link')}>
                            <a className={cx('link-item')} href="#" target="_blank">
                                TikTok for Good
                            </a>
                            <a className={cx('link-item')} href="#" target="_blank">
                                Advertise
                            </a>
                            <a className={cx('link-item')} href="#" target="_blank">
                                Developers
                            </a>
                            <a className={cx('link-item')} href="#" target="_blank">
                                Transparency
                            </a>
                            <a className={cx('link-item')} href="#" target="_blank">
                                TikTok Rewards
                            </a>
                            <a className={cx('link-item')} href="#" target="_blank">
                                TikTok Embeds
                            </a>
                        </div>
                        <div className={cx('list-link')}>
                            <a className={cx('link-item')} href="#" target="_blank">
                                Help
                            </a>
                            <a className={cx('link-item')} href="#" target="_blank">
                                Safety
                            </a>
                            <a className={cx('link-item')} href="#" target="_blank">
                                Terms
                            </a>
                            <a className={cx('link-item')} href="#" target="_blank">
                                Privacy
                            </a>
                            <a className={cx('link-item')} href="#" target="_blank">
                                Creator Portal
                            </a>
                            <a className={cx('link-item')} href="#" target="_blank">
                                Community Guidelines
                            </a>
                        </div>
                        <span className={cx('copyright')}>© 2023 TikTok</span>
                    </div>
                </aside>
                <div className={cx('divScrollbar')}>
                    <div className={cx('divScrollbarThum')}></div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
