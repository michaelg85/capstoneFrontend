import React from "react";

export default function Help () {

  return (
    <div>
        <div className="title" style={{ color: "yellow" }}>
        <h1>Settle it here!</h1>
        <h2>Each enter a movie and let the game decide...</h2>
        </div>
            <h1 style={{ color: "green" }}>Movie Search</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="searchterm"
                onChange={handleChange}
                value={formData.searchterm}
                />
                <br/>
                <input type="submit" value="Search" />
            </form>
    </div>
    
  );
}
