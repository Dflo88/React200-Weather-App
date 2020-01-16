import React from 'react';
import SearchBar from './components/SearchBar';
import WeatherOutput from './components/WeatherOutput';
import SearchHistory from './components/SearchHistory';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='header'>
          <h1> Diego's Weather Finder App</h1> <br/>
          <h3>Because not everyone lives in San Diego</h3>
        </div>
        <SearchBar/>
        <WeatherOutput/>
        <SearchHistory/>
      </div>
    );
  }
}
