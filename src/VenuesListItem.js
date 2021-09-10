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
                                    <Link to={`/venue/${venue.id}`}>
                                        <h3 className={venue.visited ? 'strike' : ''}>{ venue.name }</h3>
                                    </Link>
                                </div>    
                                <div className='color'>
                                <Link to={`/venue/${venue.id}`}>
                                    <img  src={ venue.imageUrl ? venue.imageUrl : './stock.png'}></img>
                                </Link>
                                </div>
                                <div className='wrap'>
                                    <div>
                                        <Link to={`/type/${venue.type.id}`}>#{venue.type.name.toLowerCase().split('').filter(letter => letter !== ' ').join('')}</Link>
                                    </div>
                                    <div>  
                                        <Link to={`/neighborhood/${venue.neighborhood.id}`}>#{venue.neighborhood.name.toLowerCase().split('').filter(letter => letter !== ' ').join('')}</Link>
                                    </div>
                                    <div>  
                                       <Link to={`/venue/${venue.id}`}>#notes({venue.notes.length})</Link>
                                    </div>
                                    <div>  
                                       <Link to={`/venue/${venue.id}`}>#{venue.visited ? 'visited' : 'mustgothere'}</Link>
                                    </div>  
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