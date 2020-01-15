const defaultState = {
    description: '',
    weatherData:'',
    lineItems: {}
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

        case 'SEARCH_WEATHER_PENDING': {
            return {
                description: '',
                lineItems: {
                    ...state.lineItems,
                }
            }
        }
        
        case 'SEARCH_WEATHER_FULFILLED': {
            return {
                description: '',
                weatherData: action.payload,
                lineItems: {
                    ...state.lineItems ,
                    [payload.data['name']]: new Date().toLocaleString(),
                }
            }
        }

        case 'SEARCH_WEATHER_REJECTED': {
            console.log(type)
            return {
                ...state
            }
        }

        default: {
            console.log(type)
            return state;
        }
    }  
}