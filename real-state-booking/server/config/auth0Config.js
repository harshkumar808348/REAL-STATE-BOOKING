import {auth}  from 'express-oauth2-jwt-bearer'
 const jwtCheck = auth({
    audience: "http://localhost:9000",
    issuerBaseURL: "https://dev-fnpm01xfbb5ldogu.us.auth0.com",
    tokenSigningAlg: "RS256",
  })

  export default jwtCheck