import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const _Types = ({types, venues}) => {
    return (
        <div className='list'>
            <h1>CATEGORIES</h1>
            <div >
                {
                types.map( type => { 
                    return (
                    <div key={ type.id } className='box'>
                        <h3><Link to={`/types/${type.id}`}>
                            { type.name }
                        </Link></h3>
                        <div>
                            {type.venues.length} {type.venues.length === 1 ? 'Spots' : 'Spots'} 
                        </div>
                    </div>
                    );
                })
                }
            </div>
        </div>
    );
}
const Types = connect(({types,venues}) => ({types, venues}))(_Types);

export default Types;