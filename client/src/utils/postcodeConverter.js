// make call to postcode API and return promise with latitude and longitude
const postcodeConverter = postcode =>
  fetch(`https://api.postcodes.io/postcodes/${postcode}`)
    .then(response => {
      return response.json();
    })
    .then(json => {
      const coords = {
        lat: json.result.latitude,
        lng: json.result.longitude
      };
      return coords;
    })
    .catch(err => {
      return err;
    });

export default postcodeConverter;
