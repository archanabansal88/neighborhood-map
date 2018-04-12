/**
* @constructor represents Map
* @param {object} location
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

  /**
    * @description display the venue on infowindow, setting and removing animation of marker on clicking
    */
  handleMarkerClick (value) {
    this.cancelAnimation()
    this.infowindow.open(this.map, value.marker)
    value.marker.setAnimation(google.maps.Animation.BOUNCE)
    this.currentMarker = value.marker
    this.infowindow.setContent('')
    value.getVenue().then((res) => {
      this.infoWindowMarkup(res)
    }).catch(() => {
      this.infowindow.setContent('<div class = "error">There is some problem. Please try again later</div>')
    })
  }

  /**
    * @description creating the markup of venue details and setting it to infowindow
    */
  infoWindowMarkup (res) {
    const {name, location, contact} = res.venues[0]
    const phoneNo = contact.phone ? `<div>phone: ${contact.phone}</div>` : ''
    const markUp = `<div>${name}</div>
                      <div>${location.formattedAddress.join('<br\>')}</div>${phoneNo}`
    this.infowindow.setContent(markUp)
  }

  /**
    * @description render the infowindow
    */
  renderInfoWindow () {
    this.infowindow = new google.maps.InfoWindow({})
    google.maps.event.addListener(this.infowindow, 'closeclick', this.cancelAnimation.bind(this))
  }

  /**
    * @description removing the animation of marker on closeclick
    */
  cancelAnimation () {
    if (this.currentMarker) {
      this.currentMarker.setAnimation(null)
    }
  }

  /**
    * @description closing the infowindow
    */
  closeInfoWindow () {
    this.infowindow.close()
  }
}
