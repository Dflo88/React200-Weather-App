import axios from 'axios';


export function updateSearchBarDescription(description) {
    return {
        type: 'UPDATE_SEARCHBAR_DESCRIPTION',
        payload: { description }
    };
}

export function searchWeather(description) {
    return {
        type: 'SEARCH_WEATHER',
        payload: axios.get(`/search/${description}`)
    };
}