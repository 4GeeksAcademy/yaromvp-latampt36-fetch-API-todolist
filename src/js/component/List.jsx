import React from "react";

export const List = () => {

      return (
            <div className="d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center bg-light border text-black-50 ps-5 pe-3 py-2 m-0">
                        <label className="form-label p-0 m-0">Make the bed</label>
                        <button type="button" className="btn-close" aria-label="Close"></button>
                  </div>
                  <div className="d-flex justify-content-between align-items-center bg-light border text-black-50 ps-5 pe-3 py-2 m-0">
                        <label className="form-label p-0 m-0">Clean the room</label>
                        <button type="button" className="btn-close" aria-label="Close"></button>
                  </div>
                  <div className="d-flex justify-content-between align-items-center bg-light border text-black-50 ps-5 pe-3 py-2 m-0">
                        <label className="form-label p-0 m-0">Wash the dishes</label>
                        <button type="button" className="btn-close" aria-label="Close"></button>
                  </div>
                  <div className="d-flex justify-content-between align-items-center bg-light border text-black-50 ps-5 pe-3 py-2 m-0">
                        <label className="form-label p-0 m-0">Take a shower</label>
                        <button type="button" className="btn-close" aria-label="Close"></button>
                  </div>
            </div>
      );
};