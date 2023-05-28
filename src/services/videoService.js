import * as httpRequest from '~/utils/httpRequest';

export const video = async (page = 1, type = 'for-you') => {
    try {
        const result = await httpRequest.get('videos', {
            params: {
                type,
                page,
            },
        });
        return result;
    } catch (error) {
        console.log(error);
    }
};
