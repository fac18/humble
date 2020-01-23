const domain = "http://localhost:3001";

const getRequest = endpoint => {
  return fetch(domain + endpoint)
    .then(res => res.json())
    .catch(console.log);
};

export default getRequest;
