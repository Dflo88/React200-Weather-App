import { connect } from 'react-redux';
import WeatherOutput from './WeatherOuput';

function mapStoreToProps(store) {
    return {
        weatherData: store.SearchBar.weatherData,
        lineItems: store.SearchBar.lineItems,
        icon: store.SearchBar.icon,
    }
}

export default connect(mapStoreToProps)(WeatherOutput);