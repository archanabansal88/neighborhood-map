import ko from 'knockout'

/**
* @constructor represents ViewModel
* @param {object} location
* @param {object} map
*/
export default class ViewModel {
  constructor (location, map, isAppLoaded) {
    this.location = location
    this.displayVenue = this.displayVenue.bind(this)
    this.isSideBarVisible = ko.observable(false)
    this.isAppLoaded = ko.observable(isAppLoaded)
    this.searchedText = ko.observable('')
    this.filterLocation = ko.computed(() => {
      if (isAppLoaded) {
        map.closeInfoWindow()
        return this.location.filter((venue) => {
          const isMatched = venue.title.toLowerCase().indexOf(this.searchedText().toLowerCase()) !== -1
          venue.marker.setVisible(isMatched)
          return isMatched
        })
      }
    })
  }

  /**
    * @description display the side bar with list of locations
    */
  showSideBar () {
    this.isSideBarVisible(true)
  }

  /**
    * @description hide the side bar
    */
  hideSideBar () {
    this.isSideBarVisible(false)
  }

  /**
    * @description display the venue on clicking the location of list
    */
  displayVenue (venue) {
    this.hideSideBar()
    google.maps.event.trigger(venue.marker, 'click')
  }
}
