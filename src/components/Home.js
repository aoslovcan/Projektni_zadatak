import React, { useState } from 'react';
import Modal from "@material-ui/core/Modal";
import CloseIcon from '@material-ui/icons/Close';
import { Steps, Step } from "react-step-builder";
import './Home.css';
import StepOne from './FormSteps/StepOne';
import StepTwo from './FormSteps/StepTwo';
import MasterForm from './MasterForm';
function Home(props) {

  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };
  return (
    <div >
      <p> Pritisnite gumb niže kako biste pokrenuli </p>
      <button onClick={openModal}> Pokreni kofigurator </button>

      <Modal
        open={open}

        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">

        <div className="main">
          <div className="container">
            <div className="row">
            <div className="col-sm-12" id="close">
                <CloseIcon onClick={closeModal}>X</CloseIcon>
              </div>
              <div className="col-sm-12" id="title">
                <h3>Konfigurator servisa</h3>
              </div>
             <div className="col-sm-12">
           <MasterForm/>
             </div>
            </div>
          </div>
        </div>

      </Modal>

    </div>


  );
}

export default Home;