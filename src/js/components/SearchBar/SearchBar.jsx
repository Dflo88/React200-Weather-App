import React from 'react';

import{
    updateSearchBarDescription,
    searchWeather
} from './SearchBarActions';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
        this.handleGetWeather = this.handleGetWeather.bind(this);
    }

    handleDescriptionInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateSearchBarDescription(value));
    }

    handleGetWeather() {
        const { description, dispatch } = this.props;
        dispatch(searchWeather(description));
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
                    onClick={ this.handleGetWeather }
                    >Go!
                </button>
            </div>
        );
    }
}