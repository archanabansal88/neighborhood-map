import getVenueDetails from './venueDetails'

export default class Venue {
  constructor (location) {
    this.title = location.title
    this.location = location.location
  }

  getVenue () {
    return new Promise((resolve, reject) => {
      if (!this.venue) {
        getVenueDetails(this.location.lat, this.location.lng, this.title).then((res) => {
          this.venue = res.response
          resolve(this.venue)
        })
      } else {
        resolve(this.venue)
      }
    })
  }
}
