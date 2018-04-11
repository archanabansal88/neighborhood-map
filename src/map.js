/**
* @constructor represents Map
* @param {number} lat
* @param {number} lng
*/
export default class Map {
  constructor (location) {
    this.location = location
    this.init()
  }

  /**
    * @description initialize the app
    */
  init () {
    this.renderMap()
    this.renderMarker()
    this.renderInfoWindow()
  }

  /**
    * @description render a new map JS object
    */
  renderMap () {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: this.location[0].location,
      zoom: 13
    })
  }

  /**
    * @description render a marker appearing with the position on the map with title and set up a event listener for a marker
    */
  renderMarker () {
    this.location.forEach((value) => {
      value.marker = new google.maps.Marker({
        position: value.location,
        animation: google.maps.Animation.DROP,
        map: this.map,
        title: value.title
      })
      value.marker.addListener('click', this.handleMarkerClick.bind(this, value))
    })
  }

  handleMarkerClick (value) {
    this.infowindow.open(this.map, value.marker)
    this.infowindow.setContent('')
    value.getVenue().then((res) => {
      this.infoWindowMarkup(res)
    })
  }

  infoWindowMarkup (res) {
    const {name, location, contact} = res.venues[0]
    const markUp = `<div>${name}</div>
                      <div>${location.address}</div>
                      <div>${location.crossStreet}</div>
                      <div>phone-${contact.phone}</div>`
    this.infowindow.setContent(markUp)
  }

  /**
    * @description render a infowindow with the content
    */
  renderInfoWindow () {
    this.infowindow = new google.maps.InfoWindow({})
  }
  closeInfoWindow () {
    this.infowindow.close()
  }
}
