import React from 'react';

export default Wrapped => props => {
    const { activeCategoryId } = props;

    const selectedCategory = (categoryId => {
        switch (categoryId) {
            case 'category-characters':
                return 'people';
            case 'category-starships':
                return 'starships';
            case 'category-vehicles':
                return 'vehicles';
            case 'category-planets':
                return 'planets';
            default:
                return 'people';
        }
    })(activeCategoryId);

    const selectedImageCategory = (categoryId => {
        switch (categoryId) {
            case 'category-characters':
                return 'characters';
            case 'category-starships':
                return 'starships';
            case 'category-vehicles':
                return 'vehicles';
            case 'category-planets':
                return 'planets';
            default:
                return 'people';
        }
    })(activeCategoryId);

    return <Wrapped
                selectedCategory={selectedCategory}
                selectedImageCategory={selectedImageCategory}
                {...props}
            />
}
