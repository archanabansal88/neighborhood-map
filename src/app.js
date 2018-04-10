import ko from 'knockout'
import Map from './map'
import ViewModel from './viewModel'

function initMap () {
  const map = new Map()
  ko.applyBindings(new ViewModel())
}

window.initMap = initMap
