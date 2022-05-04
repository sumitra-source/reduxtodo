import { v4 as uuidv4 } from "uuid";

export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: uuidv4(),
      data,
    },
  };
};
export const deleteTodo = (deleteId) => {
  return {
    type: "DELETE_TODO",
    payload: deleteId,
  };
};
export const removeTodo = () => {
  return {
    type: "REMOVE_TODO",
  };
};
