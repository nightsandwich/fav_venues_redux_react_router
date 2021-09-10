import {createStore, combineReducers, applyMiddleware} from 'redux';
 
const LOAD_VENUES = 'LOAD_VENUES';
const LOAD_NEIGHBORHOODS = 'LOAD_NEIGHBORHOODS';
const LOAD_TYPES = 'LOAD_TYPES';
const CREATE = 'CREATE';
const DELETE = 'DELETE';
const VISITED = 'VISITED';
const NEW_HOOD = 'NEW_HOOD';
const NEW_TYPE = 'NEW_TYPE';
const LOAD_NOTES = 'LOAD_NOTES';
const NEW_NOTE = 'NEW_NOTE';
const DELETE_NOTE = 'DELETE_NOTE';

import axios from 'axios';
import thunk from 'redux-thunk';


const venuesReducer = (state = [], action) => {
    if(action.type === LOAD_VENUES){
        state = action.venues;
    }
    if(action.type === CREATE){
        state = [...state, action.venue];
    }
    if(action.type === DELETE){
        state = state.filter(venue => venue.id !== action.venue.id)
    }
    if(action.type === VISITED){
        state = state.map(venue =>
            venue.id === action.venue.id ? action.venue : venue
        );
    }
    return state;
}
const neighborhoodsReducer = (state = [], action) => {
    if(action.type === LOAD_NEIGHBORHOODS){
        state = action.neighborhoods;
    }
    if(action.type === NEW_HOOD){
        state = [...state, action.neighborhood];
    }
    return state;
}
const typesReducer = (state = [], action) => {
    if(action.type === LOAD_TYPES){
        state = action.types;
    }
    if(action.type === NEW_TYPE){
        state = [...state, action.type];
    }
    return state;
}
const notesReducer = (state = [], action) => {
    if(action.type === LOAD_NOTES){
        state = action.notes;
    }
    if(action.type === NEW_NOTE){
        state = [...state, action.note];
    }
    if(action.type === DELETE_NOTE){
        //console.log(action);
        state = state.filter(note => note.id !== action.note.id)
    }
    return state;
}

const reducer = combineReducers({
    venues: venuesReducer,
    neighborhoods: neighborhoodsReducer,
    types: typesReducer,
    notes: notesReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

const _loadVenues = (venues) => {
    return {
    type: LOAD_VENUES,
    venues
    }
}
const loadVenues = () => {
    return async (dispatch) => {
        const venues =  (await (axios.get('/api/venues'))).data;
        dispatch(_loadVenues(venues));
    } 
}
const _loadNeighborhoods = (neighborhoods) => {
    return {
        type: LOAD_NEIGHBORHOODS,
        neighborhoods
    }
}
const loadNeighborhoods = () => {
    return async(dispatch)=> {
        const neighborhoods =  (await (axios.get('/api/neighborhoods'))).data;
        dispatch(_loadNeighborhoods(neighborhoods));
    }
}
const _loadTypes = (types) => {
    return {
        type: LOAD_TYPES,
        types
    }
}
const loadTypes = () => {
    return async(dispatch)=> {
        const types =  (await (axios.get('/api/types'))).data;
        dispatch(_loadTypes(types));
    }
}

const _loadNotes = (notes) => {
    return {
        type: LOAD_NOTES,
        notes
    }
}
const loadNotes = () => {
    return async(dispatch)=> {
        const notes =  (await (axios.get('/api/notes'))).data;
        dispatch(_loadNotes(notes));
    }
}
const _newNote = (note) => {
    return {
        type: NEW_NOTE,
        note
    }
}
const newNote = (note, history) => {
    // console.log('note', note);
    return async(dispatch) => {
        const created = (await axios.post('/api/notes',  note )).data;
        dispatch(_newNote(created));
        history.push(`/venue/${venueId}`);
    }
}

const _create = (venue) => {
    return {
        type: CREATE,
        venue
    }
}
const create = (name, neighborhoodId, typeId, website, imageUrl, history) => {
    return async(dispatch) => {
        const venue = (await axios.post('/api/venues', { name, website, imageUrl, neighborhoodId, typeId })).data;
        dispatch(_create(venue));
        history.push(`/venue/${venue.id}`);   
    };
}
const _deleteVenue = (venue) => {
    return {
        type: DELETE,
        venue
    }
}
const deleteVenue = (id, history) => {
    return async (dispatch) => {
        const venue = (await axios.delete(`/api/venues/${id}`)).data;
        dispatch(_deleteVenue(venue));
        history.push(`/venues`);
    }
}
const _deleteNote = (note) => {
    return {
        type: DELETE_NOTE,
        note
    }
}
const deleteNote = (id, venueId, history) => {
    return async (dispatch) => {
        const note = (await axios.delete(`/api/notes/${id}`)).data;
        dispatch(_deleteNote(note));
        history.push(`/venue/${venueId}`);
    }
}
const _visited = venue => {
    return {
        type: VISITED,
        venue
    }
}
const visited = (venue, history) => {
    return async(dispatch) => {
        const updated = (await axios.put(`/api/venues/${venue.id}`, {visited: !venue.visited })).data;
        dispatch(_visited(updated));
        history.push(`/venues`);
        
    }
}
const _newHood = (neighborhood) => {
    return {
        type: NEW_HOOD,
        neighborhood
    }
}
const newHood = (neighborhood, history) => {
    return async(dispatch) => {
        const created = (await axios.post('/api/neighborhoods', neighborhood)).data;
        dispatch(_newHood(created));
        //history.push(`/neighborhoods/${created.id}`);
    }
}
const _newType = (type) => {
    return {
        type: NEW_TYPE,
        type
    }
}
const newType = (type, history) => {
    return async(dispatch) => {
        const created = (await axios.post('/api/types', type)).data;
        dispatch(_newType(created));
        //history.push(`/types/${created.id}`);
        
    }
}
export default store;
export {loadVenues, loadNeighborhoods, create, deleteVenue, visited, newHood, loadTypes, newType, loadNotes, newNote, deleteNote};