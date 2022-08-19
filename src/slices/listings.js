import { createSlice } from '@reduxjs/toolkit';
import Api from 'services/Api';

export const initialState = {
  loading: false,
  hasErrors: false,
  listings: [],
  locations: [],
  locationsDetailed:[]
}

// A slice for listings with our three reducers
const listingsSlice = createSlice({
  name: 'listings',
  initialState,
  reducers: {
    getListingsRequest: (state) => {
      state.loading = true
    },
    getListingsSuccess: (state, { payload }) => {
      state.listings = payload
      state.loading = false
      state.hasErrors = false
    },
    getListingsFailure: (state) => {
      state.loading = false
      state.hasErrors = true
    },
    getLocationsRequest: (state) => {
      state.loading = true
    },
    getLocationsSuccess: (state, { payload }) => {
      state.locations = payload
      state.loading = false
      state.hasErrors = false
    },
    getLocationsFailure: (state) => {
      state.loading = false
      state.hasErrors = true
    },
    getLocationsDetailedRequest: (state) => {
      state.loading = true
    },
    getLocationsDetailedSuccess: (state, { payload }) => {
      state.locationsDetailed = payload
      state.loading = false
      state.hasErrors = false
    },
    getLocationsDetailedFailure: (state) => {
      state.loading = false
      state.hasErrors = true
    },
  },
});

// Three actions generated from the slice
export const {
  getListingsRequest,
  getListingsSuccess,
  getListingsFailure,
  getLocationsRequest,
  getLocationsSuccess,
  getLocationsFailure,
  getLocationsDetailedRequest,
  getLocationsDetailedSuccess,
  getLocationsDetailedFailure
} = listingsSlice.actions

// A selector
export const listingsSelector = (state) => state.listings

// The reducer
export default listingsSlice.reducer

// Asynchronous thunk action
export function fetchLocations() {
  return async (dispatch) => {
    dispatch(getLocationsRequest());
    Api.create().getLocations().then((response) => {
        console.log(response.data);
        dispatch(getLocationsSuccess(response.data))
    }).catch((error) => {
        console.log(error);
        dispatch(getLocationsFailure())
    });
  }
}


// Asynchronous thunk action
export function fetchListings() {
  return async (dispatch) => {
    dispatch(getListingsRequest());
    Api.create().getListings().then((response) => {
        dispatch(getListingsSuccess(response.data.matchedListings))
    }).catch((error) => {
        dispatch(getListingsFailure())
    });
  }
}

// Asynchronous thunk action
export function fetchSearchResult() {
  return async (dispatch) => {
    dispatch(getListingsRequest());
    Api.create().getSearchResults().then((response) => {
        dispatch(getListingsSuccess(response.data.matchedListings))
    }).catch((error) => {
        dispatch(getListingsFailure())
    });
  }
}

// Asynchronous thunk action
export function fetchLocationsDetailed() {
  return async (dispatch) => {
    dispatch(getLocationsRequest());
    Api.create().getLocationsDetailed().then((response) => {
        dispatch(getLocationsDetailedSuccess(response.data))
    }).catch((error) => {
        console.log(error);
        dispatch(getLocationsDetailedFailure())
    });
  }
}
