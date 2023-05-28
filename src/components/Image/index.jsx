import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import PropTypes from 'prop-types';

const Image = forwardRef(({ src, alt, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return <img ref={ref} src={fallback || src} alt={alt} {...props} onError={handleError} />;
});

Image.displayName = 'Image';

Image.propTypes = {
    src: PropTypes.any,
    alt: PropTypes.any,
    fallback: PropTypes.any,
};

export default Image;
