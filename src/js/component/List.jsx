import React, { useState, useEffect } from "react";
import { ItemsLeft } from "./ItemsLeft";

export const List = () => {

      const [inputValue, setInputValue] = useState("");
      const [items, setItems] = useState([]);

      const handleInputChange = (event) => {
            setInputValue(event.target.value);
      };

      const handleKeyDown = (event) => {
            if (event.key === "Enter" && inputValue.trim() !== "") {
                  const newItems = items.concat(inputValue.trim());
                  setItems(newItems);
                  setInputValue("");
            }
      };

      const deleteItem = (id) => {
            setItems((prev) => {
                  return prev.filter((itemToDelete) => {
                        return prev.indexOf(itemToDelete) !== id
                  })
            })
      }

      console.log(items)
      useEffect(() => {
            setItems(items)
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

                  {items.map((item, index) => (
                        <div key={index} className="viewCnt d-flex justify-content-between align-items-center bg-light border text-black-50 ps-5 pe-3 py-2 m-0">
                              <p className="p-0 m-0">{item}</p>
                              <button
                                    type="button"
                                    className="viewBtn btn-close"
                                    aria-label="Close"
                                    onClick={() => { deleteItem(index) }}>
                              </button>
                        </div>
                  ))}

                  <ItemsLeft number={items.length} />
            </div>
      );
};