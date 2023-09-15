const initialState = {
  cities: {
    currentCityWeather: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CITIES':
      return {
        ...state,
        cities: {
          ...state.cities,
          currentCityWeather: [...state.cities.currentCityWeather, action.payload],
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
