import React from "react";

export default function Form() {
  return (
    <div>
      <div className="input-group">
        <div className="form-outline">
          <input type="search" id="form1" className="form-control" />
          <label className="form-label" for="form1"></label>
        </div>
        <div>
          <button type="button" className="btn btn-primary">
            search
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
