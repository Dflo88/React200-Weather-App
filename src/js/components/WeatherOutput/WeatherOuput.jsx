import React from 'react';

export default class WeatherOutput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='container weatherOutputContainer'>
                <div className='weatherOutputHeader'>City Information</div>
                <div className='weatherOutputCityName'>San Diego</div>
                <div className='weatherOutputDetails'>
                    <p>Temp(F)</p>
                    <p>prop data</p>
                </div>
                <div className='weatherOutputDetails'>
                    <p>Pressure</p>
                    <p>prop data</p>
                </div>
                <div className='weatherOutputDetails'>
                    <p>Humidity</p>
                    <p>prop data</p>    
                </div>
                <div className='weatherOutputDetails'>
                    <p>Lowest Temperature (F)</p>
                    <p>prop data</p>    
                </div>
                <div className='weatherOutputDetails'>
                    <p>Highest Temperature (F)</p>
                    <p>prop data</p>
                </div>
                <div className='weatherOutputDetails'>
                    <p>Wind Speed</p>
                    <p>prop data</p>
                </div>
            </div>
        );
    }
}