import ko from 'knockout'
import Map from './map'
import ViewModel from './viewModel'
import location from './locations'
import Venue from './venue'

/**
 * @description bootstrap the application when google map is loaded
 */
const initMap = () => {
  const venueDetails = location.map((venue) => new Venue(venue))
  const map = new Map(venueDetails)
  ko.applyBindings(new ViewModel(venueDetails, map, true))
}

/**
 * @description handles error when google map fails to load
 */
const handleMapError = () => {
  ko.applyBindings(new ViewModel([], {}, false))
}

window.initMap = initMap
window.handleMapError = handleMapError
