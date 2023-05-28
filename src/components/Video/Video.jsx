import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { Link } from 'react-router-dom';
import Image from '../Image';
import Button from '../Button';
import { CommentIcon, HeartIcon, MusicIcon, ShareIcon } from '../Icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from '../SuggestedAccounts/AccountPreview';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

const Video = ({ data }) => {
    const [play, setPlay] = useState(false);
    const [volume, setVolume] = useState(false);
    const videoRef = useRef(null);
    const [controlVolume, setControlVolume] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef(null);

    const adjustVolume = (event) => {
        if (!isDragging) return;

        const boundingRect = event.currentTarget.getBoundingClientRect();
        const mouseY = event.clientY - boundingRect.top;
        const percentage = 1 - mouseY / boundingRect.height;
        let volume = percentage.toFixed(2);

        if (volume < 0) {
            setControlVolume(0);
            videoRef.current.volume = 0;
        } else if (volume > 1) {
            setControlVolume(1);
            videoRef.current.volume = 1;
        } else {
            setControlVolume(volume);
            videoRef.current.volume = volume;
        }
    };

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const renderPreview = (props) => {
        return (
            <div tabIndex={'-1'} {...props}>
                <PopperWrapper>
                    <AccountPreview data={data} outline />
                </PopperWrapper>
            </div>
        );
    };

    useEffect(() => {
        let isPaused = false;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.intersectionRatio > 0.6 && videoRef.current.paused) {
                        videoRef.current.play();
                        setPlay(true);
                        isPaused = true;
                    } else if (isPaused) {
                        videoRef.current.pause();
                        setPlay(false);
                    }
                });
            },
            { threshold: [0.6] },
        );
        observer.observe(videoRef.current);
    }, []);

    const onHandleVideoPlay = () => {
        setPlay(!play);
        !play ? videoRef.current.play() : videoRef.current.pause();
    };

    const onHandleVideoVolume = () => {
        setVolume(!volume);
        videoRef.current.muted = !volume;
    };

    return (
        <div className={cx('wrapper')}>
            <Link>
                <div>
                    <Tippy interactive delay={[800, 600]} offset={[120, 4]} placement="bottom" render={renderPreview}>
                        <Image src={data.user.avatar} className={cx('custom-image')} />
                    </Tippy>
                </div>
            </Link>
            <div className={cx('video-body')}>
                <div className={cx('text-info')}>
                    <div>
                        <Tippy
                            interactive
                            delay={[800, 600]}
                            offset={[-95, 4]}
                            placement="bottom"
                            render={renderPreview}
                        >
                            <div className={cx('name')}>
                                <Link>
                                    <h3 className={cx('full-name')}>
                                        `${data.user.first_name} ${data.user.last_name}`
                                    </h3>
                                </Link>
                                <Link>
                                    <h4 className={cx('nick-name')}>{data.user.nickname}</h4>
                                </Link>
                            </div>
                        </Tippy>
                    </div>
                    <Button outline className={cx('follow-btn')}>
                        Follow
                    </Button>
                    <div className={cx('content')}>
                        <span>{data.description}</span>
                        <Link>
                            <strong>#vacaiket</strong>
                        </Link>
                        <Link>
                            <strong>#nhanvatchinh</strong>
                        </Link>
                    </div>
                    <Link>
                        <div className={cx('music')}>
                            <MusicIcon />
                            <p>{data.music}</p>
                        </div>
                    </Link>
                </div>
                <div className={cx('video-container')}>
                    <div className={cx('video-card')}>
                        <video
                            ref={videoRef}
                            poster={data.thumb_url}
                            className={cx('video')}
                            src={data.file_url}
                            loop
                        ></video>
                        <div onClick={onHandleVideoPlay} className={cx('item-play')}>
                            {play ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                        </div>
                        <div className={cx('item-volume')}>
                            <div
                                onMouseMove={adjustVolume}
                                onMouseUp={handleMouseUp}
                                className={cx('volume-control-container')}
                            >
                                <div className={cx('volume-control-progress')}></div>
                                <div
                                    ref={sliderRef}
                                    onMouseDown={handleMouseDown}
                                    style={{ transform: `translateY(${controlVolume * -37}px)` }}
                                    className={cx('volume-control-circle')}
                                ></div>
                                <div
                                    style={{ transform: `scaleY(${controlVolume})` }}
                                    className={cx('volume-control-bar')}
                                ></div>
                            </div>
                            <div onClick={onHandleVideoVolume} className={cx('volume-icon')}>
                                {volume ? (
                                    <FontAwesomeIcon icon={faVolumeXmark} />
                                ) : (
                                    <FontAwesomeIcon icon={faVolumeHigh} />
                                )}
                            </div>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={cx('action-item')}>
                        <div className={cx('item-box')}>
                            <button className={cx('item-btn')}>
                                <HeartIcon />
                            </button>
                            <strong className={cx('count')}>{data.likes_count}</strong>
                        </div>
                        <div className={cx('item-box')}>
                            <button className={cx('item-btn')}>
                                <CommentIcon />
                            </button>
                            <strong className={cx('count')}>{data.comments_count}</strong>
                        </div>
                        <div className={cx('item-box')}>
                            <button className={cx('item-btn')}>
                                <ShareIcon />
                            </button>
                            <strong className={cx('count')}>{data.shares_count}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Video.propTypes = {
    data: PropTypes.any,
};

export default Video;
