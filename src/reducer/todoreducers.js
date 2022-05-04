const initialData = {
  list: [],
};

const todoReducers = (state = initialData, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: payload.id,
            data: payload.data,
          },
        ],
      };
    case "DELETE_TODO":
      const newList = state.list.filter((elem) => elem.id !== payload);
      return {
        ...state,
        list: newList,
      };
    case "REMOVE_TODO":
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};
export default todoReducers;
