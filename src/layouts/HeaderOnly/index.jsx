import Header from '~/layouts/components/Header';
import PropTypes from 'prop-types';

const HeaderOnly = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
};

HeaderOnly.propTypes = {
    children: PropTypes.any,
};

export default HeaderOnly;
