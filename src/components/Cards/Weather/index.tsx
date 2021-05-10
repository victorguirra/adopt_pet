import React, { useEffect, useState } from 'react';
import { Container, Square, Rectangle } from './styles';

import weatherApi from '../../../services/weatherApi';

import { IoPartlySunnyOutline } from 'react-icons/io5';
import { BiWind } from 'react-icons/bi';
import { GiWaterDrop } from 'react-icons/gi';
import { BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs';

interface ICurrentTemperatureData {
    city: string;
    country: string;
    temperature: string;
    minTemperature: string;
    maxTemperature: string;
    humidity: string;
    windSpeed: string;
}

function Weather(){
    const [ currentTemperature, setCurrentTemperature ] = useState<ICurrentTemperatureData | null>(null);
    const [ currentHours, setCurrentHours ] = useState<string>('');
    const [ currentMinutes, setCurrentMinutes ] = useState<string>('');
    const [ currentSeconds, setCurrentSeconds ] = useState<string>('');

    const apiKey = "429736441cf3572838aa10530929f7cd";

    setInterval(function(){
        const currentDate = new Date();
        setCurrentHours(currentDate.getHours().toString().length === 1 
            ? `0${currentDate.getHours()}` 
            : currentDate.getHours().toString()
        );

        setCurrentMinutes(currentDate.getMinutes().toString().length === 1 
            ? `0${currentDate.getMinutes()}` 
            : currentDate.getMinutes().toString()
        );
        
        setCurrentSeconds(currentDate.getSeconds().toString().length === 1 
            ? `0${currentDate.getSeconds()}` 
            : currentDate.getSeconds().toString()
        );
    }, 1000);

    function convertKelvinToCelsius(kelvinTemperature: number){
        const temperatureInCelcius = kelvinTemperature - 273.15;

        return temperatureInCelcius.toFixed(1).toString();
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            (async () => {

                await weatherApi.get(`/weather?lat=${ position.coords.latitude }&lon=${ position.coords.longitude }&appid=${ apiKey }`)
                    .then(response => {
                        setCurrentTemperature({
                            city: response.data.name,
                            country: response.data.sys.country,
                            temperature: convertKelvinToCelsius(response.data.main.temp),
                            minTemperature: convertKelvinToCelsius(response.data.main.temp_min),
                            maxTemperature: convertKelvinToCelsius(response.data.main.temp_max),
                            humidity: response.data.main.humidity,
                            windSpeed: response.data.wind.speed
                        })
                    }).catch(err => {
                        console.log(`Erro na requisição: ${ err }`);
                    })
            })()
        })
    }, [])

    return(
        <Container>
            <div className="row">
                <Square>
                    <p>{ currentTemperature?.city } - { currentTemperature?.country }</p>
                    <IoPartlySunnyOutline size={ 35 } color="#FFF" />
                    <span className="firstSquare">
                        { currentTemperature?.temperature }
                        <small>°C</small>
                    </span>
                </Square>

                <Square>
                    <span className="secondSquare">
                        <BiWind size={20 } color="#FFF" />
                        { currentTemperature?.windSpeed } km/h
                    </span>
                    <span className="secondSquare">
                        <GiWaterDrop size={ 20 } color="#FFF" />
                        { currentTemperature?.humidity } %
                    </span>
                    <div>
                        <span>
                            <BsArrowUpShort size={ 25 } color="#FFF" />
                            { currentTemperature?.maxTemperature } °C 
                        </span>
                        <span>
                            <BsArrowDownShort size={ 25 } color="#FFF" />
                            { currentTemperature?.minTemperature } °C
                        </span>
                    </div>
                </Square>
            </div>

            <Rectangle>
                { currentHours && currentMinutes && currentSeconds && (
                    <>
                        <div>
                            <h3>{ currentHours }</h3>
                            <span>h</span>
                        </div>
                        <div>
                            <h3>{ currentMinutes }</h3>
                            <span>m</span>
                        </div>
                        <div>
                            <h3>{ currentSeconds }</h3>
                            <span>s</span>
                        </div>
                    </>
                )}  
            </Rectangle>
        </Container>
    )
}

export default Weather;