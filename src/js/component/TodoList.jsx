import React, { useState } from "react";

export const TodoList = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // durante una mentoria comentamos esto fuera para hacer el codigo
  // en una misma linea en vez de llamar la funcion

  // const handleAddTodo = (event) => {
  //   if (event.key === "Enter" && inputValue.trim() !== "") {
  //     setList([...list, inputValue]);
  //     setInputValue("");
  //   }
  // };
  // const deleteTodo = (itemToDelete) => {
  //   const newList = list.filter((item) => item !== itemToDelete);
  //   setList(newList)
  // }

  return (
    <div className="container bg-light m-4 p-3">
      <div className="row">
        <h1 className="text-center pb-3">My To-do List</h1>
      </div>

      <div className="row">
        <div className="col">
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            /* onKeyDown={handleAddTodo} */
            onKeyUp={(event) => {
              if (event.key === "Enter") {
                if (inputValue.trim() === "") return
                setList(list.concat(inputValue));
                setInputValue('')
              }
            }}
            placeholder="add something to the list"
          />
        </div>

      </div>


      <div className="row">
        <div className="col-6">
          <ul>
            {list.map((listItem, index) => (
              <li key={index}>
                <p>{listItem}</p>

                <button onClick={() => setList(list.filter((lista, listaIndex) => index !== listaIndex))} >
                  <i className="fa-solid fa-trash" />
                </button>

              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="item-counter">
        {list.length} item{list.length !== 1 ? "s" : ""} left
      </div>
    </div>
  );
};
