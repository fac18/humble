const hostname = window && window.location && window.location.hostname;
const domain =
  hostname === "localhost"
    ? "http://localhost:3001"
    : "https://wearehumble.herokuapp.com";

const getCategories = endpoint => {
  return fetch(domain + endpoint)
    .then(res => res.json())
    .catch(console.log);
};

export default getCategories;
