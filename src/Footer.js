import React from 'react';

const handleSubmit = () => {
    // ... get data form
    // ... submit to API or something
  }
  
const Footer = ({neighborhoods, types}) => {
return (
    <>
    <h2>Add New Place</h2>
    <div className='fields'>
        <label className='label'>Name</label>
        <input />
    </div>
    <div className='fields'>
        <label className='label'>Notes</label>
        <textarea rows='5' cols='20' />
    </div>
    <br />
    <div id='dropdowns'>
        <div id='neighborhoods'>
            <label for='neighborhoods'>
                Neighborhood
            </label>
            <select>
                {
                neighborhoods.map( neighborhood => { 
                    return (
                    <option value={ neighborhood.name } key={ neighborhood.id } >
                        {neighborhood.name}
                    </option>
                    );
                })
                }
            </select>
        </div>
        <div id='types'>
            <label for='types'>
                Categories
            </label>
            <select>
                {
                types.map( type => { 
                    return (
                    <option value={ type.name } key={ type.id } >
                        {type.name}
                    </option>
                    );
                })
                }
            </select>
        </div>
    </div>
    <br />
    <input type='submit' value='Submit' onClick={handleSubmit}></input>
    </>
);
}

export default Footer;
  