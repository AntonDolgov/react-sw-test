import { CHANGE_CATEGORY } from '../constants';

export function changeCategory (activeCategoryId) {
    return {
        type: CHANGE_CATEGORY,
        payload: {
            activeCategoryId
        }
    }
}
