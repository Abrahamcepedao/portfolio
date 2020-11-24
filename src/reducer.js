export const initialState = {
  dark: false,
};


const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DARK":
      return {
        ...state,
        dark: action.dark
      };
    default:
      return state;
  }
};

export default reducer;