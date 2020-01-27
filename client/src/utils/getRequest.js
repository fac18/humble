const production = "https://wearehumble.herokuapp.com";
const development = "http://localhost:3001";
const domain = process.env.NODE_ENV === "production" ? production : development;

const getRequest = endpoint => {
  return fetch(domain + endpoint)
    .then(res => res.json())
    .catch(console.log);
};

export default getRequest;
