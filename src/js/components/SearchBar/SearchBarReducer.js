const defaultState = {
    description: '',
    weatherData:{
        'Temperature (F)': '',
        'Pressure (hPa)': '',
        'Humidity (%)': '',
        'Lowest Temperature (F)': '',
        'Highest Temperature (F)': '',
        'Wind Speed (mph)': '',
    },
    lineItems: [],
    icon: '',
};

export default function SearchBarReducer (state = defaultState, action){
    const { type, payload } = action;

    switch (type) {
        case 'UPDATE_SEARCHBAR_DESCRIPTION': {
            return {
                ...state,
                description: payload.description
            };
        }
        
        case 'SEARCH_WEATHER_FULFILLED': {
            return {
                description: '',
                weatherData: {
                    'Temperature (F)': action.payload.data.main.temp,
                    'Pressure (hPa)': action.payload.data.main.pressure,
                    'Humidity (%)': action.payload.data.main.humidity,
                    'Lowest Temperature (F)': action.payload.data.main.temp_min,
                    'Highest Temperature (F)': action.payload.data.main.temp_max,
                    'Wind Speed (mph)': action.payload.data.wind.speed,
                },
                lineItems: [ [payload.data['name'], new Date().toLocaleString()], ...state.lineItems ],
                icon : action.payload.data.weather[0]['icon'],
            };
        }

        case 'SEARCH_WEATHER_REJECTED': {
            alert(`I'm sorry, but we cant seem to find that city in our data base. Please enter a different city`)
            return {
                ...state
            };
        }

        case 'SEARCH_WEATHER_PENDING': {
            return {
                ...state
            };
        }

        default: {
            return state;
        }
    }  
}