import React, { Component } from 'react';

import classes from './styles/reserveForm.css';
import Fieldset from '../../../shared/UI/Fieldset/Fieldset';
import reserveFormState from './reserveFormState';
import { fieldsetInputChanged } from '../../../shared/util/input';


class reserveForm extends Component {
    state = {
        reserveForm: reserveFormState,
    }

    inputChangedHandler = (value, fieldsetIdentifier, inputIdentifier) => {
        const newForm = fieldsetInputChanged(
            this.state, 'reserveForm', value, fieldsetIdentifier, inputIdentifier)
        this.setState({ reserveForm: newForm })
    }
    submitFormHandler = (e) => {
        e.preventDefault();
    }

    render() {
        const reserveForm = { ...this.state.reserveForm };
        const formElementsArray = [];

        for (let key in reserveForm) {
            const inputsArray = [];
            const fieldsetInputs = reserveForm[key].inputs;
            for (let input in fieldsetInputs) {
                inputsArray.push({
                    id: input,
                    config: fieldsetInputs[input]
                })
            }
            formElementsArray.push({
                fieldsetId: key,
                inputs: inputsArray,
                inputGroupClass: reserveForm[key].inputGroupClass,
                legend: reserveForm[key].legend,
            })
        }
        let form = (
            <div>
                <form onSubmit={this.submitFormHandler} className={classes.Form}>
                    {formElementsArray.map(formElement => {
                        return <Fieldset
                            key={formElement.fieldsetId}
                            fieldsetId={formElement.fieldsetId}
                            inputs={formElement.inputs}
                            inputGroupClass={formElement.inputGroupClass}
                            legend={formElement.legend}
                            inputChange={this.inputChangedHandler}
                        />
                    })}
                    <button className={classes.SubmitBtn}>Submit</button>
                </form>
            </div>
        )
        return form;
    }
}

export default reserveForm;