import React from 'react';

const Neighborhoods = ({neighborhoods, neighborhoodSelected}) => {
    return (
        <div className='list'>
            <h1>NEIGHBORHOODS</h1>
            <div >
                {
                neighborhoods.map( neighborhood => { 
                    return (
                    <div key={ neighborhood.id } className='box'>
                        <h3><a onClick={() => neighborhoodSelected(neighborhood.id)}>
                            { neighborhood.name }
                            </a>
                        </h3>
                        <div>
                            {neighborhood.venues.length} {neighborhood.venues.length === 1 ? 'Spot' : 'Spots'} 
                            
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