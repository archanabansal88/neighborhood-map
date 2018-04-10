import location from './locations'
/**
* @constructor represents Map
* @param {number} lat
* @param {number} lng
*/
export default class Map {
  constructor () {
    this.marker = []
    this.init()
  }

  /**
    * @description initialize the app
    */
  init () {
    this.renderMap()
    this.renderInfoWindow()
    this.renderMarker()
  }

  /**
    * @description render a new map JS object
    */
  renderMap () {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: location[0].location,
      zoom: 13
    })
  }

  /**
    * @description render a marker appearing with the position on the map with title!
    */
  renderMarker () {
    location.forEach((value, index) => {
      this.marker[index] = new google.maps.Marker({
        position: value.location,
        animation: google.maps.Animation.DROP,
        map: this.map,
        title: value.title
      })
      this.attachEvent(index)
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
  attachEvent (index) {
    this.marker[index].addListener('click', () => {
      this.infowindow.open(this.map, this.marker[index])
    })
  }
}
