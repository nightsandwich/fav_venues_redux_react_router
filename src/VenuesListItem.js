import React from 'react';

import {Link} from 'react-router-dom';


const VenuesListItem = ( {venues}) => {
    
    return (
    <>
        <div id='venues-container'>
            <div className='venue-flex'>
                
                {
                venues.map( venue => { 
                    if(!venue.id){
                        return '...loading venue';
                    }
                    return (
                            <div key={ venue.id }  className={venue.visited ? 'visited' : 'mustvisit'}>
                                <div>
                                    <Link to={`/venues/${venue.id}`}>
                                        { venue.name }
                                    </Link>
                                </div>    
                                <div >
                                <Link to={`/venues/${venue.id}`}>
                                    <img src={ venue.imageUrl ? venue.imageUrl : './stock.png'}></img>
                                </Link>
                                </div>
                                <div>
                                <Link to={`/types/${venue.type.id}`}>[{venue.type.name}</Link> in <Link to={`/neighborhoods/${venue.neighborhood.id}`}>{venue.neighborhood.name}</Link>]
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    </>
    );
}

export default VenuesListItem;