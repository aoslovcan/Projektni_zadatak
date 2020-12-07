import React from 'react'

const StepFour = (props) => {
    console.log(props.data)




    if (props.currentStepFour !== 4) {
        return null
    }
    return (
        <div className="container border-bottom">
         
            <div className="row border-bottom">
                <div id="mark-title" className="col-sm-12" >
                    <h5 > Korak 4. Pregled i potvrda vašeg odabira </h5>
                    <p>Molimo vas da još jednom pregledate i potvrdite unesene podatke. Ukoliko želite promjeniti neki od podataka, možete pritisnuti umb za uređivanje pored svake od kategorija. Kada ste provjerili i potvrdili ispravnost svojih podataka pritisnite gumb pošalji na dnu, za slanje upita za servis.</p>
                </div>

                <div className="col-sm-6">
                    
                       <h3>Model vozila <button className="btn">Uredi</button></h3> 
                      
                  <p>{props.data.car_mark}
                </p> 

                </div>
               

                <div className="col-sm-6 ">
                <h3>Odabrane usluge <button className="btn">Uredi</button></h3> 
                      {props.data.service }
                  
                </div>
                <div className="col-sm-12" style={{textAlign : 'right'}}>
                    <p>Popust: -{props.discountPrice} kn</p>
                    <p>Ukupno: {props.price}</p>
                    
                </div>
               
             
                
            </div>
            <div className="row border-bottom">
           

                       <div className=" col-sm-12">
                        <h3>Kontakt podaci  <button className="btn">Uredi</button></h3>    
                    </div>
                    <div className="row col-sm-12">
                 
                         <li className="col-sm-6">Ime i prezime: {props.data.full_name}</li>
                         <li className="col-sm-6">Email adresa: {props.data.email}</li>
                         <li className="col-sm-6">Broj telefona: {props.data.phone_number}</li>
                         <li className="col-sm-6">Napomena: {props.data.remark}</li>
                        
                    </div>
                
            </div>
        </div>
    );
}
export default StepFour