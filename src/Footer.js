import React from 'react';

const handleSubmit = () => {
    // ... get data form
    // ... submit to API or something
  }
  
const Footer = ({neighborhoods, types}) => {
return (
    <>
    <h2>Add New Place</h2>
    <label>
        Name
        <input />
    </label>
    <br />
    <label for='neighborhoods'>
        Neighborhood
    </label>
    <select id="neighborhoods">
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
    <label for='types'>
        Categories
    </label>
    <select id="types">
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
    <br />
    <button onClick={handleSubmit}>Submit</button>
    </>
);
}

export default Footer;
  