import React, { useState } from 'react'
import StepOne from './FormSteps/StepOne'
import StepTwo from './FormSteps/StepTwo'
import StepThree from './FormSteps/StepThree'
import StepFour from './FormSteps/StepFour';
import Success from './FormSteps/Success';
function MasterForm(props) {
    const [info, dataInfo] = useState({
        currentStep: 1,
        car_mark: "",
        full_name: "",
        email: "",
        phone_number: "",
        remark: "",
        service: []

    });
    const [price, setPrice] = useState({})
console.log(info.service)
    console.log(info)
    const { currentStep,
        car_mark,
        full_name,
        email,
        phone_number,
        remark,
        service } = info;


    const [checked, setServices] = useState([])
    console.log(checked)
    const filterHandler = input => event => {
        dataInfo({ ...info, service: event.target.value })

    };

    const handleChange = input => e => {


        dataInfo({
            ...info, [input]: e.target.value
        })
        console.log(e.target.value)



    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const dataData = info;
        console.log(dataData)
        sessionStorage.setItem("values", dataData)


    }

    const _next = () => {
        let currentStep = info.currentStep
        currentStep = currentStep >= 4 ? 5 : currentStep + 1
        dataInfo({
            ...info,
            currentStep: currentStep
        })
    }

    const _prev = () => {
        let currentStep = info.currentStep
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        dataInfo({
            ...info,
            currentStep: currentStep
        })
    }

    const discaount = () =>{
        if(info.service.length != 0){
          let value =  prompt('Enter value');
          if (value == 'Tokić123'){
            
        let  price = info.service.match(/\((.*?)kn?\)/)[1] - (info.service.match(/\((.*?)kn?\)/)[1] * (3/10))
        let discount = info.service.match(/\((.*?)kn?\)/)[1] * (3/10);
       setPrice({price,discount})
          }
          else{
              return null;
          }
        }
        
    }

    /*
    * the functions for our button
    */
    const previousButton = () => {
        let currentStep = info.currentStep;
        if (currentStep !== 1 && currentStep !== 5) {
            return (
                <button
                    className=" btn btn-secondary"
                    id="btnB"
                    type="button" onClick={_prev}>
                    Previous
                </button>
            )
        }
        return null;
    }

    const nextButton = () => {
        let currentStep = info.currentStep;
        console.log(info.service.length)

        if (currentStep == 1 && info.car_mark) {
            return (
                <button
                    className="btn btn-primary float-right"
                    id="btnB"
                    type="button" onClick={_next}>
                    Next
                </button>
            )
        }

        else if (currentStep == 2 && currentStep > 1 && info.service.length != 0) {

            return (
                <button
                    className=" btn btn-primary float-right"
                    id="btnB"
                    type="button" onClick={_next}>
                    Next
                </button>
            )

        }
        else if (currentStep == 3 && currentStep > 2 && info.full_name && info.email && info.phone_number) {

            return (
                <button
                    className=" btn btn-primary float-right"
                    type="button" onClick={_next}   id="btnB">
                       
                    Next
                </button>
            )

        }

        else if (currentStep == 4) {
            return (
                <button
                    className=" btn btn-primary float-right"
                    id="btnB"
                    type="button" onClick={_next}>
                    Pošalji
                </button>
            )
        }
        return null;
    }


    return (
        <form className="form" onSubmit={handleSubmit}>
            <StepOne
                currentStepOne={currentStep}
                handleChange={handleChange}
            />
            <StepTwo
                currentStepTwo={currentStep}
                handleChange={filterHandler}
                service={service}
                discountPrice = {price.price ? price.price : 0}
                discount ={discaount}
                price={info.service.length != 0 ? info.service.match(/\((.*?)\)/)[1] : 0}
            />
            <StepThree
                currentStepThree={currentStep}
                handleChange={handleChange}
                full_name={full_name}
                email={email}
                phone_number={phone_number}
                remark={remark}
            />
            <StepFour
                currentStepFour={currentStep}
                data={info}
                discountPrice = {price.discount ? price.discount : 0}
                price={price.price ? price.price : info.service.length != 0 ? info.service.match(/\((.*?)\)/)[1] : 0}

            />
            <Success
                currentStepFour={currentStep}
                onClick={props.onCloseModal}
            />
            <div className="row" id="buttons">
                <div className="col-sm-12">
                {previousButton()}
            {nextButton()}
                </div>
          

            </div>
           

        </form>

    )
}

export default MasterForm;