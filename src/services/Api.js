import apisauce from 'apisauce';
import customAxios from 'utils/customAxios';

export default {
  create: () => {
    const api = apisauce.create({
      axiosInstance : customAxios
    })

    const setAuthData = (authData) => {
      return api.setHeaders(authData)
    }


    return {
      setAuthData,
      getLocations: () => api.get(`/api/location/all`),
      getLocationsDetailed: () => api.get(`/api/location/all/detailed`),
      getSearchResults: () => api.get(`/api/search`),
      getListings: () => api.get(`/api/search`),
      sendContactMessage: (params) =>
        api.post(`api/auth/contact`, params),
    }
  },
}
