import React, { useEffect, useState } from 'react';
import { Container } from './styles';

import climateApi from '../../../services/climateApi';

interface ICurrentLocationData {
    id: number;
    name: string;
    state: string;
    country: string;
}

function Climate(){
    const [ currentLocationData, setCurrentLocationData ] = useState<ICurrentLocationData | null>(null);

    const apiToken = "104028772f0d3be8864a68438bd3c73a";

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            (async () => {
                //position.coords.latitude
                //position.coords.longitude
                
            })()
        })
    }, [])

    return(
        <Container>
            Clima
        </Container>
    )
}

export default Climate;