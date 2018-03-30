import axios from 'axios';
import * as actionTypes from '../constants/actionTypes';

function showQueryResult(results) {
  return {
    type: actionTypes.GET_GAMES,
    results,
  };
}

export function getSwitchGames() {
  return function (dispatch) {
    const request = axios({
      method: 'GET',
      url: 'http://localhost:8080/api/eshop',
    });
    return request
      .then((response) => {
        dispatch(showQueryResult(response.data));
      });
  };
}

