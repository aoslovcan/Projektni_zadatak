import React from 'react'

const Success = (props) => {
    if (props.currentStepFour !== 5) {
        return null
    } 
    return (
        <div className="">
            <h5>Vaša prijava je uspješno poslana</h5>
            <p>Vaša prijava je uspješno poslana i zaprimljena. Kontaktirat ćemo vas u najkraćem mogućem roku. Hvala vam.</p>
        
            <button
         className="btn btn-primary float-right"
         type="button" onClick={props.onClick}>
        Zatvori
     </button>
        
        </div>
        

    );
}
export default Success;