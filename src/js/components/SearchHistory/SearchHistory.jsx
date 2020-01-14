import React from 'react';

export default class SearchHistory extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='container searchHistoryContainer'>
                <div className='searchHistoryHeader'>Search History</div><br/>
                <table className='searchHistoryTable'>
                    <tbody>
                        <tr>
                            <td>San Diego</td>
                            <td>01/13/20 11:55</td>
                        </tr>
                        <tr>
                            <td>San Salvador</td>
                            <td>01/13/20 11:54</td>
                        </tr>
                        <tr>
                            <td>Belize</td>
                            <td>01/13/20 11:54</td>
                        </tr>
                        <tr>
                            <td>Tokyo</td>
                            <td>01/12/20 20:24</td>
                        </tr>
                        <tr>
                            <td>Bilboa</td>
                            <td>01/12/20 20:53</td>
                        </tr>
                        <tr>
                            <td>Rome</td>
                            <td>01/11/20 15:15</td>
                        </tr>
                    </tbody>
                </table><br/>
            </div>
        );
    }
}