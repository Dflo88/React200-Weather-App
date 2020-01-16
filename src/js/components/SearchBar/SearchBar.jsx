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
        this.handlePredefinedCityWeather = this.handlePredefinedCityWeather.bind(this);
    }
// The componentDidMount function makes an inital api call to get the weather for San Diego
// when this app starts up. We use San Diego as out default location.
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(searchWeather('San Diego'))
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
// This function finds the weather for predefined cities located above the search bar.
    handlePredefinedCityWeather(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(searchWeather(value));
    }

    render() {
        const { description } = this.props;
        return(
            <div className='container'>
                <div className='predefinedSearchCityContainer'>
                    <button value='San Salvador' onClick={this.handlePredefinedCityWeather}>San Salvador</button>
                    <button value='Belize City' onClick={this.handlePredefinedCityWeather}>Belize City</button>
                    <button value='Van Nuys' onClick={this.handlePredefinedCityWeather}>Van Nuys</button>
                    <button value='San Luis Obispo' onClick={this.handlePredefinedCityWeather}>San Luis Obispo</button>
                    <button value='Pacific Palisades' onClick={this.handlePredefinedCityWeather}>Pacific Palisades</button>
                    <button value='San Diego' onClick={this.handlePredefinedCityWeather}>San Diego</button>
                </div>
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