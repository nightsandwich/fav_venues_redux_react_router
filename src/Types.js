import React from 'react';

const Types = ({types, typeSelected}) => {
    return (
        <div >
            <h1>CATEGORIES</h1>
            <div >
                {
                types.map( type => { 
                    return (
                    <div key={ type.id } >
                        <h3><a onClick={() => typeSelected(type.id)}>
                            { type.name }
                        </a></h3>
                        <div>
                            {type.venues.length} {type.venues.length === 1 ? 'Establishment' : 'Establishments'} 
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