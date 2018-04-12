import ko from 'knockout'
import Map from './map'
import ViewModel from './viewModel'
import location from './locations'
import Venue from './venue'

function initMap () {
  const venueDetails = location.map((venue) => new Venue(venue))
  const map = new Map(venueDetails)
  ko.applyBindings(new ViewModel(venueDetails, map, true))
}

const handleMapError = () => {
  ko.applyBindings(new ViewModel([], {}, false))
}

window.initMap = initMap
window.handleMapError = handleMapError
