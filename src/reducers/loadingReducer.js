const loadingInitialState = { isLoading: true };

export const loadingReducer = (
  state = loadingInitialState,
  { type, payload }
) => {
  switch (type) {
    case "LOADING_START":
      return {
        ...state,
        isLoading: true,
      };
    case "LOADING_END":
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
