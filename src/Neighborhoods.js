import React from 'react';
//import InsertNew from './InsertNew';
const Neighborhoods = ({neighborhoods, neighborhoodSelected, types}) => {
    return (
    <div className='lists'>
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
    </div>
    );
}

export default Neighborhoods;
       /* <div id='insert-new'>
        {
        <InsertNew neighborhoods={neighborhoods} types={types}/>
        }
        </div> */