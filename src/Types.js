import React from 'react';

const Types = ({types, typeSelected}) => {
    return (
        <div className='list'>
            <h1>CATEGORIES</h1>
            <div >
                {
                types.map( type => { 
                    return (
                    <div key={ type.id } className='box'>
                        <h3><a onClick={() => typeSelected(type.id)}>
                            { type.name }
                        </a></h3>
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

export default Types;