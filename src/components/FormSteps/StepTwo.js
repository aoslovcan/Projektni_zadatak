import React, { useState } from 'react'

const StepTwo = (props) => {
    const services = [{name: 'checkOne', value: "Zamjena ulja i filter (500 kn)"},
        {name : 'checkTwo', value:"Promjena pakni(450 kn)"}, {name:'checkThree', value:"Promjena guma (100 kn)"},
         {name : 'checkFour', value: "Servis klima uređaja (299 kn)"},
        {name:'checkFive', value: "Balansiranje guma (50 kn)"}, {name :'checkSix', value:"Zamjena ulja u kočnicama (229kn)"}];
      

   
        if (props.currentStepTwo !== 2) {
            return null
          } 
    return (
        <div className="container">
            <div className="row border-bottom">
                <div id="mark-title" className="col-sm-12" >
                    <h5 > Korak 2. Odaberite jednu ili više usluga za koje ste </h5>
                </div>
                {
                    services.map((m) =>
                        <div className="col-sm-4" id="service" >
                            <p> <input type="checkbox" onClick={props.handleChange(m.name)} 
                            value={m.value}  /> {m.value} </p> </div >
                    )
                }
                <div className="col-sm-12" id="count">
                    <p onClick={props.discount}>Imam kupon</p>
                    <p>UKUPNO: {props.discount ? props.discountPrice : props.price  }</p>
                </div>
            
            </div>
        </div>
    );
}
export default StepTwo;