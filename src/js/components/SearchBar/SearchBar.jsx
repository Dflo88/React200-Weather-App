import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='container'>
                <input className='searchInput' type='text' placeholder='Please enter a city name'></input>
                <button className='searchButton'>Go!</button>
            </div>
        );
    }
}