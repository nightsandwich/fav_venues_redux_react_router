import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const _Neighborhoods = ({neighborhoods, venues}) => {
    return (
    <div className='list'>
        <h2>NEIGHBORHOODS</h2>
        <div >
            {
            neighborhoods.map( neighborhood => { 
                return (
                <div key={ neighborhood.id } className='box'>
                    <h3><Link to={`/neighborhood/${neighborhood.id}`}>
                        { neighborhood.name } ({neighborhood.venues.length})
                        </Link>
                    </h3>
                    
                </div>
                );
            })
            }
        </div>
        
    </div>
    );
}
const Neighborhoods = connect(({neighborhoods,venues}) => ({neighborhoods, venues}))(_Neighborhoods);

export default Neighborhoods;
       /* <div id='insert-new'>
        {
        <InsertNew neighborhoods={neighborhoods} types={types}/>
        }
        </div> */