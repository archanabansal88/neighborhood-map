import ko from 'knockout'
import Map from './map'
import ViewModel from './viewModel'
import location from './locations'

function initMap () {
  const map = new Map()
  ko.applyBindings(new ViewModel(location))
}

window.initMap = initMap
