import React from 'react'

const StepTwo = () => {
    const services = ["Zamjena ulja i filter (500 kn)",
        "Promjena pakni(450 kn)", "Promjena guma (100 kn)", "Servis klima uređaja (299 kn)",
        "Balansiranje guma (50 kn)", "Zamjena ulja u kočnicama (229kn)"]
    return (
        <div className="container">
            <div className="row border-bottom">
                <div id="mark-title" className="col-sm-12" >
                    <h5 > Korak 2. Odaberite jednu ili više usluga za koje ste </h5>
                </div>
                {
                    services.map((m, i) =>
                        <div className="col-sm-4" id="service" >
                            <p> <input type="checkbox" id={i} value={m} /> {m} </p> </div >
                    )
                }
                <div className="col-sm-12" id="count">
                    <a href="#">Imam kupon</a>
                    <p>UKUPNO: 950 kn</p>
                </div>
            </div>
        </div>
    );
}
export default StepTwo;