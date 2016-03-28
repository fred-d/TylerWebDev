export default class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    }
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      center: this.props.origin,
      zoom: 15,
      mapTypeControl: false,
      streetViewControl: false,
      rotateControl: false,
      scrollwheel: false,
      draggable: (window.innerWidth > 600),
    });

    this.marker = new google.maps.Marker({
      position: this.props.origin,
      map: this.map,
      title: 'Tyler Web Dev'
    });

    this.directionsDisplay = new google.maps.DirectionsRenderer({
      map: this.map
    });

    this.forceUpdate();
  }

  handleEnableDragging() {
    this.map.setOptions({draggable: true});
    this.forceUpdate();
  }

  handleGetDirections() {
    this.setState({
      loading: true
    }, () => {
      navigator.geolocation.getCurrentPosition((position) => {
        new google.maps.DirectionsService().route({
          destination: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          origin: this.props.origin,
          travelMode: google.maps.TravelMode.DRIVING
        }, (response, status) => {
          if (status == google.maps.DirectionsStatus.OK) {
            /**
             * Display the route on the map.
             */
            this.directionsDisplay.setDirections(response);
          }

          /**
           * There was a problem with the route
           * TODO: nothing?
           */

          /**
           * Turn off loading
           */
          this.setState({
            loading: false
          });
        });
      })
    });
  }

  renderLoading() {
    return (
      <div className='loading'>
        <div><span></span></div>
      </div>
    );
  }

  renderMap() {
    return (
      <div>
        <div className="map-controls-container">
          {(this.map && this.map.draggable)
            ? ''
            : <div onClick={this.handleEnableDragging.bind(this)} className="map-button"><img src="/img/icons/hand.svg" height="20"/></div>
            }
        </div>

        <div className="map" ref="map"></div>

        <div style={{marginTop: '50px'}}>
          {navigator.geolocation
              ? <a className="button" onClick={this.handleGetDirections.bind(this)}>Get Directions!</a>
              : ''
          }
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="map-component">
        {(this.state.loading ? this.renderLoading() : '')}

        {this.renderMap()}
      </div>
    );
  }
}