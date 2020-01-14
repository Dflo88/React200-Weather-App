import React from 'react';

import{
    updateSearchBarDescription,
    searchCity
} from './SearchBarActions';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
        this.handleSearchCity = this.handleSearchCity.bind(this);
    }

    handleDescriptionInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateSearchBarDescription(value));
    }

    handleSearchCity() {
        const { description, dispatch } = this.props;
        dispatch(searchCity(description));
    }

    render() {
        const { description, lineItems } = this.props;
        return(
            <div className='container'>
                <input 
                    type='text' 
                    className='searchInput' 
                    placeholder='Please enter a city name'
                    onChange={ this.handleDescriptionInput }
                    value={ description }
                />
                <button 
                    type='button'
                    className='searchButton'
                    onClick={ this.handleSearchCity }
                    >Go!
                </button>
            </div>
        );
    }
}