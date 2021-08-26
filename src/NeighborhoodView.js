import React from 'react';
import Neighborhoods from './Neighborhoods';
import Neighborhood from './Neighborhood';

const NeighborhoodView = ({neighborhoods, neighborhoodSelected, selectedNeighborhood, venueSelected, types}) => {
    return (
        <>
        {
        selectedNeighborhood.id ? 
        <Neighborhood 
        selectedNeighborhood={selectedNeighborhood} 
        venueSelected={venueSelected} 
        neighborhoods={neighborhoods} 
        types={types} /> 
        : 
        <Neighborhoods 
        neighborhoods={neighborhoods} 
        neighborhoodSelected={neighborhoodSelected} 
        types={types} />
        }
        </>       
    )
}

export default NeighborhoodView;