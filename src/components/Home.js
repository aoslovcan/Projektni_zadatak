import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import "./Home.css";
import MasterForm from "./MasterForm";
function Home(props) {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="container">
        <div className="home">
          <h5> Pritisnite gumb niže kako biste pokrenuli </h5>
          <button className="btn btn-primary" onClick={openModal}>
            {" "}
            Pokreni konfigurator{" "}
          </button>
        </div>
      </div>
      <Modal
        open={open}
        style={{ overflow: "auto" }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-12" id="close">
                <CloseIcon  onClick={closeModal}>X</CloseIcon>
              </div>
              <div className="col-sm-12" id="title">
                <h3>Konfigurator servisa</h3>
              </div>
              <div className="col-sm-12">
                <MasterForm onCloseModal={closeModal} />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Home;
