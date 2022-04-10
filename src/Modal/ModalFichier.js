import React from "react";
import "./Modal.css";
function ModalStatut({ setopen, onChange, onClick }) {
  function onClickSave(e) {
    setopen(false);
  }
  return (
    <>
      <div class="modalBackground">
        <div className="modalContainer2">
          <div className="Cree">
            <h1>Ajouter un Files</h1>
          </div>
          <label className="Titre2">Files</label>
          <input type="file" class="inputTitre" onChange={onChange} />
          <button
            className="btn-Creer2"
            onClick={() => {
              onClickSave();
              onClick();
            }}
          >
            Ajoute
          </button>
        </div>
      </div>
    </>
  );
}

export default ModalStatut;
