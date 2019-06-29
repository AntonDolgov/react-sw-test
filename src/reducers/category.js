import {CHANGE_CATEGORY} from '../constants'

const initialCategoryId = 'category-characters';

export default (activeCategoryId = initialCategoryId, action) => {

    switch (action.type) {
        case CHANGE_CATEGORY:
            return action.payload.activeCategoryId;
        default:
            return activeCategoryId;
    }
}
