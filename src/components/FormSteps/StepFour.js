import React from 'react'

const StepFour = (props) => {
    console.log(props.data)
    if (props.currentStepFour !== 4) {
        return null
    }
    return (
        <div className="container">
          {props.data.car_mark}
           {/* <div className="row border-bottom">
                <div id="mark-title" className="col-sm-12" >
                    <h5 > Korak 4. Pregled i potvrda vašeg odabira </h5>
                    <p>Molimo vas da još jednom pregledate i potvrdite unesene podatke. Ukoliko želite promjeniti neki od podataka, možete pritisnuti umb za uređivanje pored svake od kategorija. Kada ste provjerili i potvrdili ispravnost svojih podataka pritisnite gumb pošalji na dnu, za slanje upita za servis.</p>
                </div>

                <div className="col-sm-6">
                    <div className="row col-sm-12">
                        <h1 className="col-sm-9">Model vozila</h1>
                        <button className="col-sm-3">Uredi</button>
                    </div>
                    <p>Volkswagen</p>

                </div>

                <div className="col-sm-6">
                    <div className="row col-sm-12">
                        <h1 className="col-sm-9">Odabrane usluge</h1>
                        <button className="col-sm-3">Uredi</button>
                    </div>

                </div>
                <div className="col-sm-12">
                    <p>Popust</p>
                    <p>Ukupno</p>

                </div>

                <div className="col-sm-6">
                    <div className="row col-sm-12">
                        <h1 className="col-sm-9">Kontakt podaci</h1>
                        <button className="col-sm-3">Uredi</button>
                    </div>
                </div>
                
            </div>*/}
        </div>
    );
}
export default StepFour