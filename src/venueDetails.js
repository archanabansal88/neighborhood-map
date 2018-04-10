import data from './data'
const CLIENT_ID = 'CV0WB20WFGJC3P13VMHWKYZWM1BDSHFLL2YGZIELBHLNRPPJ'
const CLIENT_SECRET = 'HP4OA3DME10PYDUZ5LW4OTL1R4RBV1OUY0APPVTVNV4ATLUR'

export default (lat, lng, query) => {
  const date = 20180409
  const api = `https://api.foursquare.com/v2/venues/search?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&ll=${lat},${lng}&query=${query}&v=${date}&radius=250`

  /* TODO: ENABLE FETCHING DATA */
  const useMockData = true
  if (!useMockData) {
    return fetch(api).then((response) => {
      return response.json()
    })
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data)
      }, 1000)
    })
  }
}
