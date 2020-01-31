// make call to postcode API and return promise with latitude and longitude
const postcodeConverter = postcode =>
  fetch(`https://api.postcodes.io/postcodes/${postcode}`)
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      let longitude = myJson.result.longitude;
      let latitude = myJson.result.latitude;
      let coords = {
        lat: latitude,
        lng: longitude
      };
      return coords;
    })
    .catch(err => {
      return err;
    });

export default postcodeConverter;
