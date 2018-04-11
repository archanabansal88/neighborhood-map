import ko from 'knockout'

export default class ViewModel {
  constructor (location, map) {
    this.location = location
    this.isSideBarVisible = ko.observable(false)
    this.searchedText = ko.observable('')
    this.filterLocation = ko.computed(() => {
      map.closeInfoWindow()
      return this.location.filter((venue) => {
        const isMatched = venue.title.toLowerCase().indexOf(this.searchedText().toLowerCase()) !== -1
        venue.marker.setVisible(isMatched)
        return isMatched
      })
    })
  }

  showSideBar () {
    this.isSideBarVisible(true)
  }

  hideSideBar () {
    this.isSideBarVisible(false)
  }

  displayVenue (venue) {
    google.maps.event.trigger(venue.marker, 'click')
  }
}
