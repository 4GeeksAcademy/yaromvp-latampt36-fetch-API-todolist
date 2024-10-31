import React, { useState, useEffect } from "react";
import { ItemsLeft } from "./ItemsLeft";

export const ToDoList = () => {

      const [inputValue, setInputValue] = useState("");
      //const [items, setItems] = useState([]);
      const [tareas, setTareas] = useState([]);

      //Create User: yaromvp
      const createUser = async () => {
            try {
                  const response = await fetch('https://playground.4geeks.com/todo/users/yaromvp', {
                        method: "POST",
                        header: { 'Content-type': 'Application/json' }
                  }
                  )
                  if (response.status !== 201) {
                        throw new Error(`Error en la solicitud: status code ${response.status}`)
                  }
                  return true
            } catch (error) {
                  console.log(error)
                  return false
            }
      }

      const getTareas = async () => {
            try {
                  const response = await fetch('https://playground.4geeks.com/todo/users/yaromvp')
                  if (response.status !== 200) {
                        console.log('Algo salió mal con el GET...');
                        createUser()
                        return
                  }
                  const body = await response.json();
                  setTareas(body.todos)
            } catch (error) {
                  console.log(error);
            }
      }

      const handleKeyDown = async (event) => {
            if (event.key === 'Enter' && inputValue.trim() !== '') {
                  try {
                        const response = await fetch('https://playground.4geeks.com/todo/todos/yaromvp', {
                              method: "POST",
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({
                                    'label': inputValue,
                                    'is_done': false
                              })
                        })
                        if (response.status !== 201) {
                              throw new Error(`Error en la solicitud: status code ${response.status}`)
                        }
                        const body = await response.json()
                        //setItems([...items, inputValue.trim()]);
                        setInputValue('');
                        await getTareas()
                        return true
                  } catch (error) {
                        console.log(error)
                        return false
                  }
            }
      }

      const handleInputChange = (event) => {
            setInputValue(event.target.value);
      };

      const deleteItem = async (id) => {
            try {
                  const response = await fetch(`https://playground.4geeks.com/todo/todos/${id}`,
                        {
                              method: 'DELETE',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify() //No se necesita body pero lo dejamos de muestra
                        }
                  )
                  if (response.status !== 204) {
                        console.log('Algo salió mal con el DELETE...');
                        return
                  }
                  getTareas()
            } catch (error) {
                  console.log(error);
            }
      }

      useEffect(() => {
            getTareas()
            //setItems(items)
      }, [])

      return (
            <div className="d-flex flex-column">
                  <input
                        className="bg-light text-black-50 border w-100 px-5 py-2 m-0"
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        placeholder="What needs to be done?"
                  />

                  {tareas.map((item) => (
                        <div
                              key={item.id}
                              className="viewCnt d-flex justify-content-between align-items-center
                              bg-light border text-black-50 ps-5 pe-3 py-2 m-0"
                        >
                              <p className="p-0 m-0">{item.label}</p>
                              <button
                                    type="button"
                                    className="viewBtn btn-close"
                                    aria-label="Close"
                                    onClick={() => { deleteItem(item.id) }}>
                              </button>
                        </div>
                  ))}

                  <ItemsLeft number={tareas.length} getTareas={getTareas} />
            </div>
      );
};