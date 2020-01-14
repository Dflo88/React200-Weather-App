import { connect } from 'react-redux';
import SearchBar from './SearchBar';

function mapStoreToProps(store) {
    return {
        description: store.SearchBar.description,
        lineItems: store.SearchBar.lineItems
    };
}

export default connect(mapStoreToProps)(SearchBar);