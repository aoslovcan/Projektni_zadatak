import React, { useState } from 'react'
import StepOne from './FormSteps/StepOne'
import StepTwo from './FormSteps/StepTwo'
import StepThree from './FormSteps/StepThree'
import StepFour from './FormSteps/StepFour';
function MasterForm() {
    const [info, dataInfo] = useState({
        currentStep: 1,
        car_mark: "",
        full_name: "",
        email: "",
        phone_number: "",
        remark: "",
        service: ""

    });
    console.log(info)
    const { currentStep,
        car_mark,
        full_name,
        email,
        phone_number,
        remark,
        service } = info;

   

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
        sessionStorage.setItem("values", dataData )


    }

    const _next = () => {
        let currentStep = info.currentStep
        currentStep = currentStep >= 3 ? 4 : currentStep + 1
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

    /*
    * the functions for our button
    */
    const previousButton = () => {
        let currentStep = info.currentStep;
        if (currentStep !== 1) {
            return (
                <button
                    className="btn btn-secondary"
                    type="button" onClick={_prev}>
                    Previous
                </button>
            )
        }
        return null;
    }

    const nextButton = () => {
        let currentStep = info.currentStep;
        if (currentStep < 4) {
            return (
                <button
                    className="btn btn-primary float-right"
                    type="button" onClick={_next}>
                    Next
                </button>
            )
        }
        return null;
    }

    
    return (
        <form onSubmit={handleSubmit}>
            <StepOne
                currentStepOne={currentStep}
                handleChange={handleChange}
            />
            <StepTwo
                currentStepTwo={currentStep}
                handleChange={handleChange}
                service={service}
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
         />
            {previousButton()}
            {nextButton()}


        </form>
    
    )
}

export default MasterForm;