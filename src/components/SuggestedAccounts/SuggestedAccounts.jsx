import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import { useEffect, useState } from 'react';
import * as suggestedService from '~/services/suggestedService';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const SuggestedAccounts = ({ label }) => {
    const [suggested, setSuggested] = useState([]);
    const [countSuggested, setSountSuggested] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const suggested = await suggestedService.suggested(1, 15);
                setSuggested(suggested);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    const count = !countSuggested ? 5 : suggested.length;

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {suggested.map((item, index) => {
                if (index < count) {
                    return <AccountItem key={item.id} data={item} />;
                }
                return null;
            })}

            <p onClick={() => setSountSuggested(!countSuggested)} className={cx('more-btn')}>
                {countSuggested ? 'See less' : 'See all'}
            </p>
        </div>
    );
};

SuggestedAccounts.propTypes = {
    label: PropTypes.any,
};

export default SuggestedAccounts;
