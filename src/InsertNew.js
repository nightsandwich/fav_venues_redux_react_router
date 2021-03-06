import React, {Component} from 'react';
import { connect } from "react-redux";
import {create} from './store';
import VenuesListItem from './VenuesListItem';

class _InsertNew extends Component {
    constructor(props){
        super(props);
        this.state = {
            venueName: '',
            neighborhoodId: 1,
            typeId: 1,
            website: '',
            imageUrl: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
        this.isDisabled = this.isDisabled.bind(this);
    }
    isDisabled(){
        if(!this.state.venueName.length || this.props.venues.filter(venue => {
            if (venue.name === this.state.venueName) return true;
        }).length) return true;
        else return false;
    }
    onChange(ev){
        const change = {};
        change[ev.target.name] = ev.target.value;
        this.setState(change);
    }
    async onSave(ev){
        const {venueName, neighborhoodId, typeId, website, imageUrl} = this.state;
        ev.preventDefault();
        try {
            await this.props.create(venueName, neighborhoodId, typeId, website ? website : 'https://www.yelp.com', imageUrl ? imageUrl : 'brooklyn.png');
        }
        catch(ex){
            console.log(ex);
        }
    }

render() {
    const {venueName, neighborhoodId, typeId, website, imageUrl} = this.state;
    const {onSave, onChange} = this;
    const {neighborhoods, types, venues} = this.props;
    
    return (
    <>
    
    <div id='insert-new-grid'>
        {
            <form onSubmit={ onSave } className='venueform'>
                <div className='textinput'>
                    <h2>ADD A PLACE</h2>
                    <div className='fields'>
                        <label className='label'><strong>Name (Required)</strong></label>
                        <br></br>
                        <input type='string' name='venueName' onChange={ onChange } value={venueName}/>
                    </div>
                    <div className='fields'>
                        <label className='label'>Website URL</label>
                        <br></br>
                        <input type='string' name='website' onChange={ onChange } value={website}/>
                    </div>
                    <div className='fields'>
                        <label className='label'>Image URL</label>
                        <br></br>
                        <input type='string' name='imageUrl' onChange={ onChange } value={imageUrl}/>
                    </div>
                </div>
    
                <div className='dropdowns'>
                    <div id='neighborhoods'>
                        <label >
                            Neighborhoods
                        </label>
                        <br></br>
                        <select name='neighborhoodId' onChange={ onChange } value={neighborhoodId}>
                            {
                            neighborhoods.map( neighborhood => { 
                                return (
                                <option value={ neighborhood.id } key={ neighborhood.id } >
                                    {neighborhood.name}
                                </option>
                                );
                            })
                            }
                        </select>
                    </div>
                    <div id='types'>
                        <label>
                            Categories
                        </label>
                        <br></br>
                        <select name='typeId' onChange={ onChange } value={typeId}>
                            {
                            types.map( type => { 
                                return (
                                <option value={type.id} key={ type.id } >
                                    {type.name}
                                </option>
                                );
                            })
                            }
                        </select>
                    </div>
                <br />
                <button className='submit' disabled={this.isDisabled()}>ADD</button>
                </div>
            </form>
        }
        <VenuesListItem venues={venues} />
    </div>
    </>
    );
};
}
const mapStateToProps = ({neighborhoods, types, venues}) => ({neighborhoods, types, venues});
const mapDispatchToProps = (dispatch, {history}) => (
    {
        create: (venueName, neighborhoodId, typeId, website, imageUrl) => {
            dispatch(create(venueName, neighborhoodId, typeId, website, imageUrl, history));
        }
    }
)

const InsertNew = connect(mapStateToProps, mapDispatchToProps)(_InsertNew);
export default InsertNew;

  