const deletingInitialState = {};

export const deletingReducer = (
  state = deletingInitialState,
  { type, payload }
) => {
  switch (type) {
    case "DELETE_ITEM":
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};
