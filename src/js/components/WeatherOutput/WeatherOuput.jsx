import React from 'react';

export default class WeatherOutput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { weatherData, lineItems } = this.props;
        const currentCityName = ((lineItems[0] || [])[0])
        const weatherDataPropertyName = Object.keys(weatherData);
        const weatherDataPropertyValue = Object.values(weatherData);
        
        return(
            <div className='container weatherOutputContainer'>
                <div className='weatherOutputHeader'>City Information</div>
                <div className='weatherOutputCityName'>
                    <p>{currentCityName}</p>
                    <img src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} />
                </div>
                {
                    weatherDataPropertyName.map((propertyName,i) => 
                        <div className='weatherOutputDetails' key={propertyName}>
                            <p>{propertyName}</p>
                            <p>{weatherDataPropertyValue[i]}</p>
                        </div>
                    )
                }
            </div>
        );
    }
}