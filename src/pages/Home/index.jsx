import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';
import Video from '~/components/Video';
import { useEffect, useState } from 'react';
import * as videoService from '~/services/videoService';

const cx = classNames.bind(styles);

const Home = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const { meta } = await videoService.video(); // Call api lấy total_pages

                const randomPage = Math.floor(Math.random() * meta.pagination.total_pages) + 1; // Chọn một số ngẫu nhiên
                const { data } = await videoService.video(randomPage);
                setVideos(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    useEffect(() => {
        const handleScroll = async () => {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

            if (scrollTop + clientHeight >= scrollHeight - 10) {
                // Người dùng đã kéo đến cuối trang!
                setLoading(true);
                const { meta } = await videoService.video(); // Call api lấy total_pages
                const randomPage = Math.floor(Math.random() * meta.pagination.total_pages) + 1; // Chọn một số ngẫu nhiên
                const { data } = await videoService.video(randomPage);
                setVideos((prevVideos) => [...prevVideos, ...data]);
                setLoading(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div>
                {videos.map((video) => (
                    <Video key={video.id} data={video} />
                ))}
                {loading && <div className={cx('loader')} />}
            </div>
        </div>
    );
};

export default Home;
