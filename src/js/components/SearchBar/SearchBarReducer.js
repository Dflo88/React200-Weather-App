const defaultState = {
    city: '',
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

        case 'SEARCH_CITY': {
            const { description } = action.payload;
            return {
                description: '',
                lineItems: [
                    ...state.lineItems,
                    { description }
                ]
            };
        }

        default: {
            return state;
        }
    }  
}