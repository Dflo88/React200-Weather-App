const defaultState = {
    description: '',
    weatherData:'',
    lineItems: []
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

        case 'SEARCH_WEATHER': {
            const { description } = action.payload;
            return {
                description: '',
                weatherData: { description },
                lineItems: [
                    ...state.lineItems,
                ]
            };
        }

        case 'SEARCH_WEATHER_FULFILLED': {
            return {
                ...state,
                weatherData: action.payload
            }
        }

        default: {
            return state;
        }
    }  
}