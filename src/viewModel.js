import ko from 'knockout'

export default class ViewModel {
  constructor () {
    this.isSideBarVisible = ko.observable(false)
  }
  showSideBar () {
    this.isSideBarVisible(true)
  }
  hideSideBar () {
    this.isSideBarVisible(false)
  }
}
