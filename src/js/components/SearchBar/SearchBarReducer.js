const defaultState = {
    description: '',
    weatherData:{
        'Temperature (F)': '',
        'Pressure': '',
        'Humidity (%)': '',
        'Lowest Temperature (F)': '',
        'Highest Temperature (F)': '',
        'Wind Speed (mph)': '',
        'icon': '',
    },
    lineItems: [],
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
                    'Pressure': action.payload.data.main.pressure,
                    'Humidity (%)': action.payload.data.main.humidity,
                    'Lowest Temperature (F)': action.payload.data.main.temp_min,
                    'Highest Temperature (F)': action.payload.data.main.temp_max,
                    'Wind Speed (mph)': action.payload.data.wind.speed,
                    'icon': action.payload.data.weather[0]['icon'],
                },
                lineItems: [ [payload.data['name'], new Date().toLocaleString()], ...state.lineItems
                    // ...state.lineItems ,
                    // [payload.data['name']]: new Date().toLocaleString(),
                ]
            }
        }

        case 'SEARCH_WEATHER_REJECTED': {
            console.log(type)
            return {
                ...state
            }
        }

        default: {
            return state;
        }
    }  
}