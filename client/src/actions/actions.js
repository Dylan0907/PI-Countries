import axios from 'axios';

export function getCountries() {
  return async function (dispatch) {
    let json = await axios("http://localhost:3001/countries", {
    });
    return dispatch({ type: "GET_COUNTRIES", payload: json.data });
  };
}

export function getDetails(id) {
  return async function (dispatch) {
    let json = await axios(`http://localhost:3001/countries/${id}`, {
    });
    return dispatch({ type: "GET_DETAIL", payload: json.data });
  };
}

export function getCountriesByName(name) {
  return async function (dispatch) {
    let json = await axios(`http://localhost:3001/countries?name=${name}`, {
    });
    return dispatch({ type: "GET_COUNTRIES_BY_NAME", payload: json.data });
  };
}

export function orderByName(payload) {
  return {
      type: 'ORDER_BY_NAME',
      payload
  }
}

export function orderByPop(payload) {
  return {
      type: 'ORDER_BY_POP',
      payload
  }
}

export function filterByContinent(payload) {
  return {
      type: 'FILTER_BY_CONTINENT',
      payload
  }
}
