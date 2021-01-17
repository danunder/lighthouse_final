import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import PlacesAutocomplete from 'react-places-autocomplete';
 
export function MapContainer (props){
  
  const { search, setSearch } = useState('')
  const { address, setAddress } = useState('')

    return (
      <Map google={props.google} zoom={18}>
        {/* <PlacesAutocomplete
          value={search}
          onChange={setSearch}
          onSelect={setAddress}/> */}
        
 
        
      </Map>
    );
  
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(MapContainer);
