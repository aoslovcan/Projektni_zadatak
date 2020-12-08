import React from "react";

const StepFour = (props) => {
  if (props.currentStepFour !== 4) {
    return null;
  }
  return (
    <div className="container border-bottom">
      <div className="row border-bottom">
        <div id="mark-title" className="col-sm-12">
          <h5> Korak 4. Pregled i potvrda vašeg odabira </h5>
          <p style={{ textAlign: "justify" }}>
            Molimo vas da još jednom pregledate i potvrdite unesene podatke.
            Ukoliko želite promjeniti neki od podataka, možete pritisnuti umb za
            uređivanje pored svake od kategorija. Kada ste provjerili i
            potvrdili ispravnost svojih podataka pritisnite gumb pošalji na dnu,
            za slanje upita za servis.
          </p>
        </div>
        <div className="col-sm-6">
          <h3>
            Model vozila{" "}
            <button className="btn" onClick={() => props.redirect(1)}>
              Uredi
            </button>
          </h3>
          <p>{props.data.car_mark}</p>
        </div>
        <div className="col-sm-6 ">
          <h3>
            Odabrane usluge{" "}
            <button className="btn" onClick={() => props.redirect(2)}>
              Uredi
            </button>
          </h3>
          {props.data.service.split("(")[0]}:{" "}
          <span id="right">{props.data.service.match(/\((.*?)\)/)[1]}</span>
        </div>
        <div className="col-sm-12" style={{ textAlign: "right" }}>
          <p>Popust (30%): -{props.discountPrice} KN</p>
          <p>
            Ukupno:{" "}
            <strong style={{ textTransform: "uppercase" }}>
              {props.discountPrice ? props.discountPriceCount : props.price}{" "}
            </strong>
          </p>
        </div>
      </div>
      <div className="row border-bottom">
        <div className=" col-sm-12">
          <h3>
            Kontakt podaci{" "}
            <button className="btn" onClick={() => props.redirect(3)}>
              Uredi
            </button>
          </h3>
        </div>
        <div className="row col-sm-12 personal_data">
          <li className="col-sm-6">
            Ime i prezime: <span id="right">{props.data.full_name}</span>
          </li>
          <li className="col-sm-6">
            Email adresa: <span id="right">{props.data.email}</span>{" "}
          </li>
          <li className="col-sm-6">
            Broj telefona: <span id="right">{props.data.phone_number}</span>
          </li>
          <li className="col-sm-6">
            Napomena: <span id="right">{props.data.remark}</span>
          </li>
        </div>
      </div>
    </div>
  );
};
export default StepFour;
