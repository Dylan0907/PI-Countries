const initialState = {
    countries: [],
    countryDetail:[],
    activities:[],
    orderedBy:{
      name:'',
      population:''
    }
};

export default function reducer(state=initialState, action){
  switch(action.type){
    case "GET_COUNTRIES":
    return {
      ...state,
      countries: action.payload
    }
    case "GET_ACTIVITIES":
    return {
      ...state,
      activities: action.payload
    }
    case "GET_DETAIL":
    return {
      ...state,
      countryDetail: action.payload
    }
    case "GET_COUNTRIES_BY_NAME":
    return {
      ...state,
      countries: action.payload
    }
    case 'ORDER_BY_NAME':
      let sortedName = action.payload === 'A-Z' ?
      state.countries.sort(function (a, b) {
          if (a.name > b.name) {
                  return 1;
          }
          if (b.name > a.name) {
                  return -1;
          }
          return 0;
      }) :
      state.countries.sort(function (a, b) {
         if (a.name > b.name) {
                  return -1;
         }
         if (b.name > a.name) {
                   return 1;
         }
        return 0;
      })
      return {
        ...state,
        countries: sortedName,
        orderedBy:{
          name: action.payload
        }
    }
    case 'ORDER_BY_POP':
      let sortedPop = action.payload === 'min-max' ?
      state.countries.sort(function (a, b) {
          if (a.population> b.population) {
                  return 1;
          }
          if (b.population > a.population) {
                  return -1;
          }
          return 0;
      }) :
      state.countries.sort(function (a, b) {
         if (a.population > b.population) {
                  return -1;
         }
         if (b.population > a.population) {
                   return 1;
         }
        return 0;
      })
      return {
        ...state,
        countries: sortedPop,
        orderedBy:{
          population:action.payload
        }
      }
      case 'FILTER_BY_CONTINENT':
        let allCountries = state.countries;
        let countriesByCont = allCountries.filter(c => c.continent === action.payload);
        return {
          ...state,
          countries: countriesByCont
      }
      case 'FILTER_BY_ACTIVITY':
        let count = state.countries;
        let activities = state.activities
        let activity = activities.filter(a => a.name === action.payload)
        let countriesByActivity = activity[0].countries.map((c) => {return c.id});
        let countriesFiltered = count.filter(c => countriesByActivity.includes(c.id))
        return {
          ...state,
          countries: countriesFiltered
      }
      default:
        return state
      }
}
