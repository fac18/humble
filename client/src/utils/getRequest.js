// const production = "https://wearehumble.herokuapp.com";
// const development = "http://localhost:3001";
// const domain = process.env.NODE_ENV === "production" ? production : development;

// const getRequest = endpoint => {
//   return fetch(domain + endpoint)
//     .then(res => res.json())
//     .catch(console.log);
// };

// export default getRequest;

// TO WRITE PACKAGE.JSON SCRIPT FOR DEV:BUILD ON CLIENT SIDE, OTHERWISE IT WILL RUN PRODUCTION ENVIRONMENT

const getRequest = endpoint => {
  return fetch("http://localhost:3001" + endpoint)
    .then(res => res.json())
    .catch(console.log);
};

export default getRequest;
