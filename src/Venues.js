import React from 'react';
import { connect } from "react-redux";
import { visited} from './store';
import {Link} from 'react-router-dom';
import VenuesListItem from './VenuesListItem';

const _Venues = ( {venues}) => {
    
    return (
    <>
        <VenuesListItem venues={venues}/>
    </>
    );
}

const Venues = connect(({venues}) => ({venues}))(_Venues);

export default Venues;