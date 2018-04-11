import ko from 'knockout'

export default class ViewModel {
  constructor (location) {
    this.location = location
    this.isSideBarVisible = ko.observable(false)
    this.searchedText = ko.observable('')
    this.filterLocation = ko.computed(() => {
      return this.location.filter((detail) => detail.title.toLowerCase().indexOf(this.searchedText().toLowerCase()) !== -1)
    })
  }

  showSideBar () {
    this.isSideBarVisible(true)
  }

  hideSideBar () {
    this.isSideBarVisible(false)
  }

  displayVenue (location) {
    console.log(location)
  }
}
