// consider environment in order to assign domain appropriately
const domain =
  process.env.NODE_ENV === "production"
    ? "https://wearehumble.herokuapp.com"
    : "http://localhost:3001";

const getRequest = endpoint => {
  console.log(domain); // is printing heroku domain despite not declaring production environment in scripts
  // return fetch(domain + endpoint)
  return fetch("http://localhost:3001" + endpoint) // hard code localhost domain for now
    .then(res => res.json())
    .catch(console.log);
};

// const getRequest = endpoint => {
//   return fetch("http://localhost:3001" + endpoint)
//     .then(res => res.json())
//     .catch(console.log);
// };

export default getRequest;
