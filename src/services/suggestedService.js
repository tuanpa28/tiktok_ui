import * as httpRequest from '~/utils/httpRequest';

export const suggested = async (page = 1, per_page = 15) => {
    try {
        const { data } = await httpRequest.get('users/suggested', {
            params: {
                page,
                per_page,
            },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};
