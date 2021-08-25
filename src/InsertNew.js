import React from 'react';
  
const InsertNew = ({neighborhoods, types}) => {
return (
    <>
    <div id='insert-new-grid'>
    <h2>Add New Spot</h2>
        {
            <form method='POST' action='/api/venues'>
                <div className='fields'>
                    <label className='label'>Name</label>
                    <br></br>
                    <input type='string' name='venueName'/>
                </div>
                <div className='fields'>
                    <label className='label'>Website URL</label>
                    <br></br>
                    <input type='string' name='website'/>
                </div>
                <div className='fields'>
                    <label className='label'>Image URL</label>
                    <br></br>
                    <input type='string' name='imageUrl'/>
                </div>
                <br />
                <div id='dropdowns'>
                    <div id='neighborhoods'>
                        <label >
                            Neighborhood
                        </label>
                        <br></br>
                        <select name='neighborhoodId'>
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
                        <select name='typeId'>
                            {
                            types.map( type => { 
                                return (
                                <option value={ type.id } key={ type.id } >
                                    {type.name}
                                </option>
                                );
                            })
                            }
                        </select>
                    </div>
                <br />
                </div>
                <input className='submit' type='submit' value='Submit' onClick = {()=>InsertNew(venueName, website, neighborhoodId, typeId, imageUrl)}></input>
            </form>
        }
    </div>
    </>
);
}

export default InsertNew;
  