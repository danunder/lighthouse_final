import React, { Component } from 'react';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

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
      displayName: '',
      activeMarker: {},
      selectedPlace: {},
      placeID: '',
      mapCenter: {
        lat: 43.644175,
        lng: -79.402204,
      },
    };
  }

  getStreetViewURL = () => {
    return `https://maps.googleapis.com/maps/api/streetview?size=400x200&location=${this.state.mapCenter.lat},${this.state.mapCenter.lng}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
  };

  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true,
    });

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false,
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false,
      });
  };
  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    this.setState({ address });
    geocodeByAddress(address)
      .then(results => {
        // populates placeID
        this.setState({
          selectedPlace: results[0],
          placeID: results[0].place_id,
        });
        return getLatLng(results[0]);
      })

      .then(latLng => {
        // console.log('Success', latLng);
        // console.log('Address', address);
        // passes relevant address data UP to app state.
        this.props.onSelect({
          address: this.state.address,
          latLng: latLng,
          placeID: this.state.placeID,
        });
        // update center state
        this.setState({
          displayName: address,
          mapCenter: latLng,
        });
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
                style={{ width: '100%' }}
              />
              <div className='autocomplete-dropdown-container'>
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion, index) => {
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
                      key={index}
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
          onClick={this.onMapClicked}
          zoom={18}
          initialCenter={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng,
          }}
          center={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng,
          }}
          defaultOptions={{ styles: mapStyles }}
          disableDefaultUI
        >
          <Marker
            position={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng,
            }}
          />
          {this.state.address && (
            <InfoWindow
              className='info-window'
              position={this.state.mapCenter}
              onClose={this.onInfoWindowClose}
              visible={this.state.showingInfoWindow}
            >
              <div>
                <h4>{this.state.displayName}</h4>
                <img src={this.getStreetViewURL()} alt={'Google Streetview'} />
              </div>
            </InfoWindow>
          )}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(MapContainer);
