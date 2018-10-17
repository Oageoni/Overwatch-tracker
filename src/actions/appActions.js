import { ACTION_TYPES as TYPES } from "../reducers/appReducer";
import { searchText } from "../App.js";

const fixTag = battleTag => {
  return battleTag.replace("#", "-");
};

export const owStats = (battleTag) => distpatch => {
  distpatch({ type: TYPES.LOADING });
  return fetch("https://ow-api.com/v1/stats/pc/eu/"+fixTag(battleTag)+"/profile")
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

export const dvaStats = battleTag => distpatch => {
  distpatch({ type: TYPES.LOADING });
  return fetch(
    "https://ow-api.com/v1/stats/pc/eu/" +
      fixTag(battleTag) +
      "/heroes/ana,bastion,dVa,genji,hanzo,junkrat,lúcio,mccree,mei,mercy,orisa,pharah,reaper,reinhardt,roadhog,soldier76,sombra,symmetra,torbjörn,tracer,widowmaker,winston,zarya,zenyatta"
  )
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
