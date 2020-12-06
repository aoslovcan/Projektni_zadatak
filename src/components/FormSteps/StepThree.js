import React from 'react'

const StepThree = (props) => {
    if (props.currentStepThree !== 3) {
        return null
    }
    return (
        <div className="container border-bottom" >
            <div className="row ">
                <div id="mark-title" className="col-sm-12" >
                    <h5 > Korak 3. Vaši kontakt podaci </h5>
                </div>

            </div>
            <div className="row" id="count">
                <div className="col">
                    <input className="form-control" type="text" name="full_name" value={props.full_name} onChange={props.handleChange('full_name')} placeholder="Ime i prezime" />
                </div>
                <div className="col">
                    <input className="form-control" type="email" name="email" value={props.email} onChange={props.handleChange('email')} placeholder="Email adresa" />
                </div>
            </div>
            <div className="row" id="count">
                <div className="col">
                    <input className="form-control" type="text" name="phone_number" value={props.phone_number} onChange={props.handleChange('phone_number')} placeholder="Broj telefona" />
                </div>
                <div className="col">
                    <textarea className="form-control" rows="3" name="remark" value={props.remark} onChange={props.handleChange('remark')} placeholder="Napomena"></textarea>
                </div>
            </div>
           
        </div>
    );
}
export default StepThree;