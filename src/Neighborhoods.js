import React from 'react';

const Neighborhoods = ({neighborhoods, neighborhoodSelected}) => {
    return (
        <div >
            <h1>BROOKLYN NEIGHBORHOODS</h1>
            <div >
                {
                neighborhoods.map( neighborhood => { 
                    return (
                    <div key={ neighborhood.id } >
                        <h3><a onClick={() => neighborhoodSelected(neighborhood.id)}>
                            { neighborhood.name }
                        </a></h3>
                        <div>
                            {neighborhood.venues.length} {neighborhood.venues.length === 1 ? 'Establishment' : 'Establishments'} 
                        </div>
                    </div>
                    );
                })
                }
            </div>
        </div>
    );
}

export default Neighborhoods;