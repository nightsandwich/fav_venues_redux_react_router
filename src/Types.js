import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const _Types = ({types, venues}) => {
    return (
        <div className='list'>
            <h2>CATEGORIES</h2>
            <div >
                {
                types.map( type => { 
                    return (
                    <div key={ type.id } className='box'>
                        <h3><Link to={`/type/${type.id}`}>
                            { type.name } ({type.venues.length})
                        </Link></h3>
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