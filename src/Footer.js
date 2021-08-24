import React from 'react';

const handleSubmit = () => {
    // ... get data form
    // ... submit to API or something
  }
  
const Footer = ({neighborhoods, types}) => {
return (
    <div id='footer-grid'>
        <h2>Add New Place</h2>
        <div className='fields'>
            <label className='label'>Name</label>
            <input />
        </div>
        <div className='fields'>
            <label className='label'>URL</label>
            <input />
        </div>
        <br />
        <div id='dropdowns'>
            <div id='neighborhoods'>
                <label >
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
                <label>
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
        <br />
        </div>
        <input className='submit' type='submit' value='Submit' onClick={handleSubmit}></input>
    </div>
);
}

export default Footer;
  