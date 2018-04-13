const CLIENT_ID = 'CV0WB20WFGJC3P13VMHWKYZWM1BDSHFLL2YGZIELBHLNRPPJ';
const CLIENT_SECRET = 'HP4OA3DME10PYDUZ5LW4OTL1R4RBV1OUY0APPVTVNV4ATLUR';

/**
* @constructor represents Venue
* @param {object} location
*/
export default class Venue {
  constructor(location) {
    this.title = location.title;
    this.location = location.location;
  }

  /**
    * @description getting the venue
    * @returns a promise
    * if got the venue details once then caching it
    */
  getVenue() {
    return new Promise((resolve, reject) => {
      if (!this.venue) {
        this.getVenueDetails(this.location.lat, this.location.lng, this.title)
          .then(res => {
            this.venue = res.response;
            resolve(this.venue);
          })
          .catch(err => reject(err));
      } else {
        resolve(this.venue);
      }
    });
  }

  /**
    * @description fetching foursquare api
    */
  getVenueDetails(lat, lng, query) {
    const date = 20180409;
    const api = `https://api.foursquare.com/v2/venues/search?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&ll=${lat},${lng}&query=${query}&v=${date}&radius=250`;
    return fetch(api).then(response => {
      return response.json();
    });
  }
}
