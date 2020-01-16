import React from 'react';

export default class SearchHistory extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { lineItems } = this.props
        console.log(lineItems)
        return(
            <div className='container searchHistoryContainer'>
                <div className='searchHistoryHeader'>Search History</div><br/>
                <table className='searchHistoryTable'>
                    <tbody>
                        {
                            lineItems.map((searchCity,i) =>
                                <tr key={searchCity}>
                                    <td>{searchCity[0]}</td>
                                    <td>{lineItems[i][1]}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table><br/>
            </div>
        );
    }
}