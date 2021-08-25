import React from 'react';
import Types from './Types';
import Type from './Type';

const TypeView = ({types, typeSelected, selectedType, venueSelected}) => {
    return (
        <>
        {
        selectedType.id ? <Type selectedType={selectedType} venueSelected={venueSelected} /> : <Types types={types} typeSelected={typeSelected} />
        }
        </>       
    )
}

export default TypeView;