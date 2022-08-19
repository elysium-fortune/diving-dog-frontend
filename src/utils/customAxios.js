import axios from 'axios'
// const axios = require('axios');

// Step-1: Create a new Axios instance with a custom config.
// The timeout is set to 10s. If the request takes longer than
// that then the request will be aborted.

let PROD_URL = 'https://diving-dog-backend.herokuapp.com'
let STAGING_URL = 'https://diving-dog-backend-staging.herokuapp.com'

const customAxios = axios.create(
  {
    // baseURL: process.env.REACT_APP_ENV_MODE == 'production' ? process.env.REACT_APP_BASE_URL : process.env.REACT_APP_STAGING_URL,
    baseURL: PROD_URL,
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${accessToken}`
    },
    timeout: 30000,
  })

// Step-2: Create request, response & error handlers
const requestHandler = (request) => {
  if (localStorage.getItem('diving-dog-token')) {
    request.headers.Authorization =
      'Bearer ' + atob(localStorage.getItem('diving-dog-token'))
  }

  return request
}

const responseHandler = (response) => {
  if (response.status == 401) {
    window.location = '/'
  }

  return response
}

const errorHandler = (error) => {
  if (error.response.status === 401 || error.response.status === 403) {
    localStorage.removeItem('diving-dog-token')
    let whitlistUrl = [
          "/",
          "/home-2",
          "/home-3",
          "/listing",
          "/listing-2",
          "/listing-detail-2",
          "/listing-detail-3"
        ];


    if(!whitlistUrl.includes(window.location.pathname)){
      window.location = '/';
    }
  }
  return Promise.reject(error)
}

// Step-3: Configure/make use of request & response interceptors from Axios
// Note: You can create one method say configureInterceptors, add below in that,
// export and call it in an init function of the application/page.
customAxios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
)

customAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
)

// Step-4: Export the newly created Axios instance to be used in different locations.
export default customAxios
