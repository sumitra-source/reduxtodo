import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import "./todo.css";
export const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);

  const dispatch = useDispatch();
  return (
    <>
      {" "}
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add your list here❤</figcaption>
          </figure>

          <form
            className="addItems"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(addTodo(inputData));
              setInputData("");
            }}
          >
            <input
              type="text"
              placeholder="✍Add Items..."
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            ></i>
          </form>

          <div className="showItems">
            {list.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.data}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-trash-alt add-btn"
                      title="Delete Item"
                      onClick={() => dispatch(deleteTodo(elem.id))}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              target="_blank"
              onClick={() => dispatch(removeTodo())}
            >
              <span>CHECK LIST </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Todo;
