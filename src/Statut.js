import React , { useState } from "react";
import ModalStatut from "./Modal/ModalFichier"
function Statut({ Statuts  }) {




  return (
    <>
      <form>
        <select aria-label="State" className="combo" >
          <option value="Select">Select....</option>
          
          {Statuts.map((st) => {
            return <option value={st.Statut}>{st.Statut} </option>;
          })}
        </select>
     
      </form>
    
      <div id="title">
        <p>Augmentation des frais de syndic</p>
      </div>
      
    </>
  );
}
export default Statut;
