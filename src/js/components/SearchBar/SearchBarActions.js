export function updateSearchBarDescription(description) {
    return {
        type: 'UPDATE_SEARCHBAR_DESCRIPTION',
        payload: { description }
    };
}

export function searchCity(description) {
    return {
        type: 'SEARCH_CITY',
        payload: {
            description
        }
    };
}