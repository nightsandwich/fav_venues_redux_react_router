import React from 'react';
import Neighborhoods from './Neighborhoods';
import Neighborhood from './Neighborhood';

const NeighborhoodView = ({neighborhoods, neighborhoodSelected, selectedNeighborhood, venueSelected}) => {
    return (
        <>
        {
        selectedNeighborhood.id ? <Neighborhood selectedNeighborhood={selectedNeighborhood} venueSelected={venueSelected} /> : <Neighborhoods neighborhoods={neighborhoods} neighborhoodSelected={neighborhoodSelected} />
        }
        </>       
    )
}

export default NeighborhoodView;