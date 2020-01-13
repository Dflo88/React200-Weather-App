import React from 'react';
import SearchBar from './components/SearchBar/SearchBar.jsx'
import WeatherOutput from './components/WeatherOutput/WeatherOuput.jsx'
import SearchHistory from './components/SearchHistory/SearchHistory.jsx'

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='header'>
          <h1> Diego's Weather Finder App</h1> <br/>
          <hr/>
          <h3>Because not everyone lives in San Diego</h3>
        </div>
        <SearchBar/>
        <WeatherOutput/>
        <SearchHistory/>
      </div>
    );
  }
}
