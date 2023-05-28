import * as httpRequest from '~/utils/httpRequest';

export const search = async (q, type = 'less') => {
    try {
        const { data } = await httpRequest.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};
