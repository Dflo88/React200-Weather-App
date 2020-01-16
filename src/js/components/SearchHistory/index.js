import { connect } from 'react-redux';
import SearchHistory from './SearchHistory';

function mapStoreToProps(store) {
    return {
        lineItems: store.SearchBar.lineItems,
    };  
}
export default connect(mapStoreToProps)(SearchHistory);