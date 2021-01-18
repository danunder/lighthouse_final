import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import Test from './Test';

const mapStyles = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  zIndex: '-10',
};

const inputStyles = {
  position: 'absolute',
  width: '80vw',
  top: '10vw',
  left: '10vw',
  zIndex: '10',
 };

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // for google map places autocomplete
      address: '',
      showingInfoWindow: true,
      activeMarker: {},
      selectedPlace: {},
      placeID:'',
      mapCenter: {
        lat: 49.2827291,
        lng: -123.1207375,
      },
    };
  }

  // onSelect = () => this.props.onSelect

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    this.setState({ address });
    geocodeByAddress(address)
      .then(results => {
        console.log('Results [0]', results[0]);
        console.log(this);
        this.setState({placeID: results[0].place_id})
        return getLatLng(results[0]);
      })
      
      .then(latLng => {
        console.log('Success', latLng);
        console.log('Address', address)
        this.props.onSelect(address)
        // update center state
        this.setState({ mapCenter: latLng });
      })
      .catch(error => console.error('Error', error));
  };

  render() {
    return (
      <div id='googleMaps'>
        
        <PlacesAutocomplete
          
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div style={inputStyles}>
              <input
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: 'location-search-input',
                })}
                style={{width:'100%'}}
              />
              <div className='autocomplete-dropdown-container'>
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        <Map
          
          google={this.props.google}
          zoom={14}
          initialCenter={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
          }}
          center={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
          }}
          defaultOptions={{ styles: mapStyles }}
          disableDefaultUI
        >
          <Test
          address={this.state.address? this.state.address : 'Test'}/>
          <Marker
            position={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng,
            }}
          />
        </Map>
        
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(MapContainer);
