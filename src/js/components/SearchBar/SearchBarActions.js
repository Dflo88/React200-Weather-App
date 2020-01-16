import axios from 'axios';

// The updateSearchBarDescription action updates the store on change when someone types into the 
// city search bar.
export function updateSearchBarDescription(description) {
    return {
        type: 'UPDATE_SEARCHBAR_DESCRIPTION',
        payload: { description }
    };
}
// The searchWeather action will make an API call to get weather information.
export function searchWeather(description) {
    return {
        type: 'SEARCH_WEATHER',
        payload: axios.get(`/search/${description}`)
    };
}