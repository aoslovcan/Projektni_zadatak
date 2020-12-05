import React from 'react';
import './FormSteps.css'
const StepOne = () => {
    const carMark = ["Peugeot", "Volkswagen", "Citroen", "Audi", "BMW", "Seat", "Alfa Romeo",
        "Kia", "Hyundai", "Honda", "Toyota"
    ]
    console.log(carMark)
    return (
        <div className="container " >
            <div className="row border-bottom">
                <div id="mark-title" className="col-sm-12" >
                    <h5 > Korak 1. Odaberite proizvođača vašeg vozila </h5>
                </div>
                {
                    carMark.map(m =>
                        <div className="col-sm-2" id="car-mark" >
                            <p> <input type="radio" value={m} name="gender" /> {m} </p> </div >
                    )
                }
            </div>
        </div>
    );
}

export default StepOne;