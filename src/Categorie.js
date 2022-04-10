import React , { useState } from "react";


function Categorie({ Categories}) {

  return (
    <>
      <form>
        <select aria-label="State" className="combo" id="comboCategorie">
          <option value="Select">Select....</option>
          {Categories.map((Categorie) => {
            return <option>{Categorie.categorie}</option>;
          })}
        </select>
        
      </form>
    </>
  );
}
export default Categorie;