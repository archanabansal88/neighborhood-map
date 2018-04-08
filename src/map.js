/**
* @constructor represents Map
* @param {number} lat
* @param {number} lng
*/
export default class Map {
  constructor (lat, lng) {
    this.singleLatLng = {lat, lng}
    this.init()
  }

  /**
    * @description initialize the app
    */
  init () {
    this.renderMap()
    this.renderInfoWindow()
    this.renderMarker()
    this.attachEvent()
  }

  /**
    * @description create a new map JS object
    */
  renderMap () {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: this.singleLatLng,
      zoom: 13
    })
  }

  /**
    * @description render a marker appearing with the position of the singleLatLng on the map with title!
    */
  renderMarker () {
    this.marker = new google.maps.Marker({
      position: this.singleLatLng,
      map: this.map,
      title: 'First Marker!'
    })
  }

  /**
    * @description render a infowindow with the content
    */
  renderInfoWindow () {
    this.infowindow = new google.maps.InfoWindow({
      content: 'my location'
    })
  }

  /**
    * @description set up a event listener for a marker
    */
  attachEvent () {
    this.marker.addListener('click', () => {
      this.infowindow.open(this.map, this.marker)
    })
  }
}
