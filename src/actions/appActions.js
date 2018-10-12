import { ACTION_TYPES as TYPES } from "../reducers/appReducer";

export const owStats = () => distpatch => {
  distpatch({ type: TYPES.LOADING });
  return fetch("https://ow-api.com/v1/stats/pc/eu/Oageoni-2192/profile")
    .then(response => {
      if (response.status !== 200) {
        return Promise.reject("http error" + response.status);
      } else {
        return response.json();
      }
    })
    .then(json => {
      let data = [];
      distpatch({ type: TYPES.OW_STATS, value: json });
    })
    .catch(error => {
      distpatch({ type: TYPES.APPLICATION_ERROR, error });
    });
};

export const dvaStats = () => distpatch => {
  distpatch({ type: TYPES.LOADING });
  return fetch("https://ow-api.com/v1/stats/pc/eu/Oageoni-2192/heroes/dVa,moira,solider76,zenyatta,mercy,reinhardt,solider76,orisa,ana")
    .then(response => {
      if (response.status !== 200) {
        return Promise.reject("http error" + response.status);
      } else {
        return response.json();
        
      }
    })
    
    .then(json => {
      distpatch({ type: TYPES.DVA_STATS, value: json });
    })

    .catch(error => {
      distpatch({
        type: TYPES.APPLICATION_ERROR,
        error: error,
        isLoading: true
      });
    });
};
